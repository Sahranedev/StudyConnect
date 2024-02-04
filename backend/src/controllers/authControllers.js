/* const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUserByEmailWithPasswordAndPassToNext = async (req, res, next) => {
  const { email } = req.body;
  console.warn("-- enter in authCon");
  console.warn("Mail ", email);

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      include: {
        students: true,
        teachers: true,
      },
    });

    console.warn(user);

    if (user) {
      req.user = user;
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
 */
const models = require("../models");

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;

  models.user
    .findByEmailWithPassword(email)
    .then((user) => {
      if (!user) {
        return res.status(404).send("User not found");
      }
      req.user = user;
      next();
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  getUserByEmailWithPasswordAndPassToNext,
};
