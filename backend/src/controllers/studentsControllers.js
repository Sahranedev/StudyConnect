const models = require("../models");
const prisma = require("../../prisma/client");

const createStudentUser = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    hashedPassword,
    progress,
    curriculum,
    points,
  } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: hashedPassword,
        role: "Student",
        status: "Active",
        students: {
          create: {
            progress,
            curriculum,
            points,
          },
        },
      },
      include: {
        students: true,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);

    res.sendStatus(400);
  }
};

const readAllStudents = async (req, res) => {
  try {
    const getAllStudents = await prisma.user.findMany({
      where: {
        role: "Student",
      },
      include: {
        students: true,
      },
    });
    res.status(200).send(getAllStudents);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const readStudentById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const student = await prisma.students.findUnique({
      where: { id: id },
      include: {
        user: true,
      },
    });
    res.status(200).send(student);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const updateStudentUser = async (req, res) => {
  const { id } = parseInt(req.params.id);
  const { firstname, lastname, email, progress, curriculum, points } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: {
        firstname,
        lastname,
        email,

        students: {
          update: {
            data: {
              progress,
              curriculum,
              points,
            },
            where: {
              user_id: id,
            },
          },
        },
      },
      include: {
        students: true,
      },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const deleteStudentById = async (req, res) => {
  const student_id = parseInt(req.params.id);

  try {
    const student = await prisma.students.findUnique({
      where: { id: student_id },
    });

    if (!student) {
      return res
        .status(404)
        .send(`Aucun étudiant trouvé avec l'ID ${student_id}`);
    }

    await prisma.user.delete({
      where: { id: student.user_id },
    });

    res.status(200).send(`L'étudiant avec l'ID ${student_id} a été supprimé`);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Une erreur s'est produite lors de la suppression de l'étudiant");
  }
};

const deleteAllStudents = async (req, res) => {
  try {
    await prisma.enrollments.deleteMany({
      where: {
        students: {
          user: {
            role: "Student",
          },
        },
      },
    });

    const result = await prisma.user.deleteMany({
      where: {
        role: "Student",
      },
    });

    res.status(200).send(`${result.count} étudiants ont été supprimés`);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Une erreur s'est produite lors de la suppression des étudiants");
  }
};

module.exports = {
  createStudentUser,
  readAllStudents,
  readStudentById,
  updateStudentUser,
  deleteAllStudents,
  deleteStudentById,
};
