const prisma = require("../../prisma/client");

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

module.exports = {
  getEnrollements,
  takeEnrollements,
  getEnrollmentById,
  deleteEnrollmentById,
};
