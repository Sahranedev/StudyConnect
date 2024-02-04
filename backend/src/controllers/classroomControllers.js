const prisma = require("../../prisma/client");

const createClassroom = async (req, res) => {
  const { name } = req.body;
  try {
    const classroom = await prisma.classroom.create({
      data: {
        name: name,
      },
    });
    res.status(201).send(classroom);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const getAllClassroom = async (req, res) => {
  try {
    const classrooms = await prisma.classroom.findMany();
    res.status(200).send(classrooms);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const getClassroomById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const findOneClassRoom = await prisma.classroom.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).send(findOneClassRoom);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const updateClassroom = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  try {
    const classroom = await prisma.classroom.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });
    res.status(200).send(classroom);
  } catch (error) {
    console.errror(error);
    res.sendStatus(500);
  }
};

const deleteClassroom = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const classroom = await prisma.classroom.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "Classe correctement supprimé" });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const addStudentToClassroom = async (req, res) => {
  const id = parseInt(req.params.id);
  const { classroom_id } = req.body;

  try {
    await prisma.students.update({
      where: { id: id },
      data: { classroom_id },
    });

    res.status(200).send("L'étudiant a été ajouté à la classe avec succès.");
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      res.status(404).send("Étudiant ou classe non trouvé.");
    } else {
      res.status(500).send("Erreur lors de l'ajout de l'étudiant à la classe.");
    }
  }
};

// Cherche les étudiants appartenant à une classe spécifique

const getClassroomStudents = async (req, res) => {
  const classroom_id = parseInt(req.params.id);

  try {
    const classroom = await prisma.classroom.findUnique({
      where: { id: classroom_id },
      include: {
        students: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!classroom) {
      res.status(404).send("Classe non trouvée.");
    } else {
      res.status(200).json(classroom.students);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Erreur lors de la récupération des étudiants de la classe.");
  }
};
// Cherche les professeurs d'une classe spécifique
const getClassroomTeachers = async (req, res) => {
  const classroom_id = parseInt(req.params.id);

  try {
    const teacherClasses = await prisma.teacherClass.findMany({
      where: { classroom_id },
      include: {
        teachers: {
          include: {
            user: true,
          },
        },
      },
    });

    const teachers = teacherClasses.map((tc) => tc.teachers);

    res.status(200).json(teachers);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Erreur lors de la récupération des professeurs de la classe.");
  }
};

module.exports = {
  createClassroom,
  getAllClassroom,
  getClassroomById,
  updateClassroom,
  deleteClassroom,
  addStudentToClassroom,
  getClassroomStudents,
  getClassroomTeachers,
};
