const prisma = require("../../prisma/client");

const addTeacherToClassroom = async (req, res) => {
  const { classroom_id, teacher_id } = req.body;

  try {
    const newTeacherClass = await prisma.teacherClass.create({
      data: {
        classroom_id,
        teacher_id,
      },
    });

    res.status(201).json({
      message: "Enseignant ajouté à la classe avec succès",
      data: newTeacherClass,
    });
  } catch (error) {
    console.error(error);
    if (error.code === "P2002") {
      res.status(400).send("Cet enseignant est déjà attribué à cette classe.");
    } else {
      res
        .status(500)
        .send("Erreur lors de l'ajout de l'enseignant à la classe.");
    }
  }
};

module.exports = {
  addTeacherToClassroom,
};
