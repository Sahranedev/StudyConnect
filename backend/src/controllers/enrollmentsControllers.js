const models = require("../models");
const prisma = require("../../prisma/client");

const browse = (req, res) => {
  models.enrollments
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getEnrollements = async (req, res) => {
  try {
    const enrollements = await prisma.enrollments.findMany();
    res.status(200).json(enrollements);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const getEnrollmentById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const enrollment = await prisma.enrollments.findUnique({
      where: {
        id: id,
      },
      include: {
        students: {
          include: {
            user: true,
          },
        },
      },
    });
    res.status(200).send(enrollment);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const takeEnrollements = async (req, res) => {
  const { student_id, course_id } = req.body;
  try {
    const course = await prisma.courses.findUnique({
      where: { id: course_id },
      select: { date: true },
    });

    if (!course) {
      return res.status(404).send("Cours non trouvé");
    }

    const enrollements = await prisma.enrollments.create({
      data: {
        student_id: student_id,
        course_id: course_id,
        enrollment_date: course.date,
      },
    });
    res.status(201).json({
      message: "Votre inscription au cours a été correctement prise",
      data: enrollements,
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const deleteEnrollmentById = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const deletedEnrollment = await prisma.enrollments.delete({
      where: {
        id: id,
      },
    });

    res.status(200).send({
      message: "Inscription supprimée avec succès.",
      deletedEnrollment,
    });
  } catch (error) {
    console.error(error);

    if (error.code === "P2025") {
      res.status(404).send({ message: "Inscription non trouvée." });
    } else {
      res.sendStatus(500);
    }
  }
};

const read = (req, res) => {
  models.enrollments
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const enrollment = req.body;

  // TODO validations (length, format...)

  enrollment.id = parseInt(req.params.id, 10);

  models.enrollments
    .update(enrollment)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const enrollment = req.body;

  // TODO validations (length, format...)

  models.enrollments
    .insert(enrollment)
    .then(([result]) => {
      res.location(`api/courses/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.enrollments
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  getEnrollements,
  takeEnrollements,
  getEnrollmentById,
  deleteEnrollmentById,
};
