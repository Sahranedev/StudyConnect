const prisma = require("../../prisma/client");
const format = require("date-fns/format");
const fr = require("date-fns/locale").fr;
const { startOfDay, endOfDay, formatISO, addDays } = require("date-fns");

const formatTime = (time) => {
  return time ? format(new Date(time), "HH:mm") : null;
};
const formatCourseDate = (course) => {
  return {
    ...course,
    frenchFormattedDate: course.date
      ? format(new Date(course.date), "d MMMM yyyy", { locale: fr })
      : null,
    shortFormattedDate: course.date
      ? format(new Date(course.date), "dd/MM/yyyy")
      : null,
    veryShortFormattedDate: course.date
      ? format(new Date(course.date), "dd/MM")
      : null,
    formattedStartTime: formatTime(course.start_time),
    formattedEndTime: formatTime(course.end_time),
  };
};

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

const getCoursesByStudent = async (req, res) => {
  const studentId = parseInt(req.params.id);
  try {
    const studentEnrollments = await prisma.enrollments.findMany({
      where: { student_id: studentId },
      include: {
        students: {
          select: {
            user: {
              select: {
                firstname: true,
                lastname: true,
                email: true,
              },
            },
          },
        },
        courses: {
          include: {
            teachers: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });

    if (studentEnrollments.length === 0) {
      res
        .status(404)
        .send(
          { hasEnrollements: false },
          "Aucun cours inscrit pour cet étudiant"
        );
    } else {
      const studentDetails = studentEnrollments[0].students.user;
      const courses = studentEnrollments.map((enrollment) =>
        formatCourseDate(enrollment.courses)
      );

      res.status(200).send({ studentDetails, courses, hasEnrollements: true });
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const getCoursesByStudentForToday = async (req, res) => {
  const studentId = parseInt(req.params.id);
  const todayStart = formatISO(startOfDay(new Date()));
  const todayEnd = formatISO(endOfDay(new Date()));

  try {
    const studentEnrollments = await prisma.enrollments.findMany({
      where: {
        student_id: studentId,
        courses: {
          date: {
            gte: todayStart,
            lte: todayEnd,
          },
        },
      },
      include: {
        students: {
          select: {
            user: {
              select: {
                firstname: true,
                lastname: true,
                email: true,
              },
            },
          },
        },
        courses: {
          where: {
            date: {
              gte: todayStart,
              lte: todayEnd,
            },
          },
          include: {
            teachers: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });

    if (studentEnrollments.length === 0) {
      res.status(404).send({ hasCourse: false });
    } else {
      const studentDetails = studentEnrollments[0].students.user;
      const courses = studentEnrollments.map((enrollment) =>
        formatCourseDate(enrollment.courses)
      );

      res.status(200).send({ hasCourse: true, studentDetails, courses });
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const getAllStudentCoursesFor7NextDays = async (req, res) => {
  const studentId = parseInt(req.params.id);
  const tomorrow = addDays(new Date(), 1);
  const endOfSevenDaysFromTomorrow = addDays(new Date(), 8);
  const startOfTomorrow = formatISO(startOfDay(tomorrow));
  const endOfSevenDays = formatISO(endOfDay(endOfSevenDaysFromTomorrow));

  try {
    const studentEnrollments = await prisma.enrollments.findMany({
      where: {
        student_id: studentId,
        AND: [
          { enrollment_date: { gte: startOfTomorrow } },
          { enrollment_date: { lte: endOfSevenDays } },
        ],
      },
      select: { id: true, course_id: true },
    });

    const enrollmentMap = studentEnrollments.reduce((map, item) => {
      map[item.course_id] = item.id;
      return map;
    }, {});

    const availableCourses = await prisma.courses.findMany({
      where: { date: { gte: startOfTomorrow, lte: endOfSevenDays } },
      include: { teachers: { include: { user: true } } },
    });

    if (availableCourses.length === 0) {
      res.status(404).send({ available: false });
    } else {
      const formattedCourses = availableCourses.map((course) => ({
        ...formatCourseDate(course),
        isEnrolled: enrollmentMap.hasOwnProperty(course.id),
        enrollmentId: enrollmentMap[course.id] || null,
      }));

      res.status(200).send({ available: true, courses: formattedCourses });
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const getTeacherCoursesForToday = async (req, res) => {
  const teacherId = parseInt(req.params.id);
  const todayStart = startOfDay(new Date());
  const todayEnd = endOfDay(new Date());

  try {
    const todayCourses = await prisma.courses.findMany({
      where: {
        teacher_id: teacherId,
        date: {
          gte: todayStart,
          lte: todayEnd,
        },
      },
    });

    if (todayCourses.length === 0) {
      res.status(404).send({ hasCourse: false });
    } else {
      const formattedCourses = todayCourses.map((course) =>
        formatCourseDate(course)
      );
      res.status(200).send({ hasCourse: true, courses: formattedCourses });
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const getTeacherCoursesForNext7Days = async (req, res) => {
  const teacherId = parseInt(req.params.id);
  const tomorrowStart = startOfDay(addDays(new Date(), 1));
  const next7DaysEnd = endOfDay(addDays(new Date(), 7));

  try {
    const next7DaysCourses = await prisma.courses.findMany({
      where: {
        teacher_id: teacherId,
        date: {
          gte: tomorrowStart,
          lte: next7DaysEnd,
        },
      },
    });

    if (next7DaysCourses.length === 0) {
      res.status(404).send({ hasCourses: false });
    } else {
      const formattedCourses = next7DaysCourses.map((course) =>
        formatCourseDate(course)
      );
      res.status(200).send({ hasCourses: true, courses: formattedCourses });
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const createCourses = async (req, res) => {
  const {
    name,
    description,
    teacher_id,
    date,
    start_time,
    end_time,
    seat_count,
  } = req.body;
  try {
    let course = await prisma.courses.create({
      data: {
        name,
        description,
        teacher_id,
        seat_count,
        date,
        start_time,
        end_time,
      },
      include: {
        teachers: {
          include: {
            user: true,
          },
        },
      },
    });

    course = formatCourseDate(course);

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
  getAllStudentCoursesFor7NextDays,
  getCoursesByTeacher,
  getCoursesByStudent,
  getCoursesByStudentForToday,
  getTeacherCoursesForToday,
  getTeacherCoursesForNext7Days,
  getCourseById,
  deleteCourseById,
  updateCourse,
};
