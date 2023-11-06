const prisma = require("../../prisma/client");

const getAllCourses = async (req, res) => {
  try {
    const getCourses = await prisma.courses.findMany({
      include: {
        teachers: {
          include: {
            user: true,
          },
        },
      },
    });
    res.status(200).send(getCourses);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
const getCourseById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const courseById = await prisma.courses.findUnique({
      where: {
        id,
      },
      include: {
        teachers: {
          include: {
            user: {
              select: {
                firstname: true,
                lastname: true,
                email: true,
                role: true,
              },
            },
          },
        },
      },
    });

    res.status(200).send(courseById);
  } catch (error) {
    console.error(error);
  }
};
const getCoursesByTeacher = async (req, res) => {
  const teacherId = parseInt(req.params.id);
  try {
    const coursesByTeachers = await prisma.courses.findMany({
      where: {
        teacher_id: teacherId,
      },
      include: {
        teachers: {
          include: {
            user: true,
          },
        },
      },
    });
    if (coursesByTeachers.length === 0) {
      res.status(404).send("Aucun cours ou professeur correspondant trouvé");
    } else {
      res.status(200).send(coursesByTeachers);
    }
  } catch (error) {
    console.error(error);
  }
};
const createCourses = async (req, res) => {
  const { name, description, teacher_id, date, seat_count } = req.body;
  try {
    const course = await prisma.courses.create({
      data: {
        name,
        description,
        teacher_id,
        seat_count,
      },
      include: {
        teachers: {
          include: {
            user: true,
          },
        },
      },
    });
    res.status(201).send(course);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const updateCourse = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description, seat_count } = req.body;

  try {
    const course = await prisma.courses.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        description: description,
        seat_count: seat_count,
      },
    });
    res.status(200).json(course);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const deleteCourseById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const deleteCourse = await prisma.courses.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ message: "Cours supprimé", data: deleteCourse });
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      res.status(404).send("Aucun cours trouvé");
    } else {
      res.sendStatus(500);
    }
  }
};

module.exports = {
  createCourses,
  getAllCourses,
  getCoursesByTeacher,
  getCourseById,
  deleteCourseById,
  updateCourse,
};
