const models = require('../models');
const prisma = require('../../prisma/client');

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
    const enrollment = await prisma.enrollments.delete({
      where: {
        id,
      },
    });
    res.status(201).json({
      message: 'Vous vous êtes désinscris du cours',
      data: enrollment,
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const takeEnrollements = async (req, res) => {
  const { student_id, course_id, enrollment_date } = req.body;
  try {
    const enrollements = await prisma.enrollments.create({
      data: {
        student_id,
        course_id,
        enrollment_date,
      },
    });
    res.status(201).json({
      message: 'Votre incription au cours a été correctement pris',
      data: enrollements,
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
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
};
