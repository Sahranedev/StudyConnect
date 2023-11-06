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
    res.sendStatus(500);
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
              userID: id,
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

const browse = (req, res) => {
  models.students
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

  models.students
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

const add = (req, res) => {
  const student = req.body;

  // on verifie les données

  models.students
    .insert(student)
    .then(([result]) => {
      res.location(`/api/users/${result.insertId}`).sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const student = req.body;
  student.id = req.params.id;

  models.students
    .update(student)
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
  models.students
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
  createStudentUser,
  readAllStudents,
  updateStudentUser,
};
