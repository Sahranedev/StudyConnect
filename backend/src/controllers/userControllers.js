const models = require("../models");
const prisma = require("../../prisma/client");

const getAllUsersFromPrisma = async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.status(200).send(allUsers);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const getOneUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const oneUserById = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        avatar: true,
        role: true,
        createdAt: true,
        lastLogin: true,
        status: true,
        preferredLanguage: true,
      },
    });
    res.send(oneUserById);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const createStudentUser = async (req, res) => {
  const { firstname, lastname, email, password, progress, curriculum, points } =
    req.body;

  try {
    const user = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password,
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

const createAdminUser = async (req, res) => {
  const { firstname, lastname, email, hashedPassword } = req.body;

  try {
    const admin = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: hashedPassword,
        role: "Admin",
        status: "Active",
      },
    });
    res.status(201).json(admin);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).send("ID invalide");
  }

  try {
    const deleteById = await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).send("Utilisateur supprimé");
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const edit = (req, res) => {
  const user = req.body;
  user.id = req.params.id;

  models.user
    .update(user)
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
  edit,
  getAllUsersFromPrisma,
  getOneUserById,
  createStudentUser,
  deleteUserById,
  createAdminUser,
};
