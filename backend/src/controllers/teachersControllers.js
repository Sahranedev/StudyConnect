const models = require("../models");
const prisma = require("../../prisma/client");

const browse = (req, res) => {
  models.teachers
    .findAll()
    .then(([results]) => {
      res.send(results);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  const { id } = req.params;

  models.teachers
    .find(id)
    .then(([results]) => {
      if (results[0]) res.send(results[0]);
      else res.sendStatus(404);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};
const readAllTeachers = async (req, res) => {
  try {
    const getAllTeachers = await prisma.user.findMany({
      where: {
        role: "Teacher",
      },
      include: {
        teachers: true,
      },
    });
    res.status(200).send(getAllTeachers);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const readTeacherById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const teacher = await prisma.teachers.findUnique({
      where: { id: id },
      include: {
        user: true,
      },
    });
    if (teacher) {
      res.status(200).send(teacher);
    } else {
      res.status(404).send({ message: "Teacher not found" });
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const createTeachertUser = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    hashedPassword,
    qualifications,
    bio,
    expertiseField,
    hourlyRate,
  } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: hashedPassword,
        role: "Teacher",
        status: "Active",
        teachers: {
          create: {
            qualifications,
            bio,
            expertiseField,
            hourlyRate,
          },
        },
      },
      include: {
        teachers: true,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
const edit = (req, res) => {
  const teacher = req.body;
  teacher.id = req.params.id;

  models.teacher
    .update(teacher)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const { id } = req.params;
  models.teacher
    .delete(id)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  createTeachertUser,
  readTeacherById,
  readAllTeachers,
  edit,
  destroy,
};
