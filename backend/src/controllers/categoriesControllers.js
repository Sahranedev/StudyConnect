const prisma = require("../../prisma/client");

const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const newCategory = await prisma.categories.create({
      data: {
        name,
      },
    });
    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await prisma.categories.findMany();
    res.status(200).send(categories);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const deleteCategory = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const category = await prisma.categories.delete({
      where: {
        id: id,
      },
    });

    res.status(200).send({ message: "Catégorie supprimée avec succès" });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = {
  createCategory,
  deleteCategory,
  getAllCategories,
};
