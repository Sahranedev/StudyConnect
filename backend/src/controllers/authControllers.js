const { pool } = require("../models/index");

const getUserByEmailWithPasswordAndPassToNext = async (req, res, next) => {
  const { email } = req.body;

  const findByEmailWithPassword = async (email) => {
    try {
      const [results, fields] = await pool.query(
        `SELECT u.*, s.id AS student_id, s.progress, s.lastActivity, s.curriculum, s.points, s.classroom_id, t.id AS teacher_id
         FROM user u
         LEFT JOIN students s ON u.id = s.user_id
         LEFT JOIN teachers t ON u.id = t.user_id
         WHERE u.email = ?`,
        [email]
      );
      return results[0];
    } catch (error) {
      throw error;
    }
  };

  try {
    const user = await findByEmailWithPassword(email);

    if (!user) {
      return res.status(404).send("User not found");
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

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

module.exports = {
  getUserByEmailWithPasswordAndPassToNext,
};
