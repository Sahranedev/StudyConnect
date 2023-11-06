const prisma = require("../../prisma/client");

const createClassroom = async (req, res) => {
  const { name, course_id, courses } = req.body;
  try {
    const classRoom = await prisma.classroom.create({
      data: {
        name: name,
        course_id: course_id,
      },
    });
    res.status(201).send(classRoom);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
