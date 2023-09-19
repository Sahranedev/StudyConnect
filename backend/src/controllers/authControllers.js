const models = require("../models");

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;
  console.warn("-- enter in authCon");
  console.warn("Mail ", email);
  models.user
    .findByEmailWithPassword(email)
    .then(([users]) => {
      console.warn(users);
      if (users[0]) {
        [req.user] = users;
        next();
      } else res.sendStatus(401);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const getProfByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;
  console.warn("-- enter in authCon");
  console.warn("Mail ", email);
  models.professor
    .findByEmailWithPassword(email)
    .then(([professor]) => {
      console.warn(professor);
      if (professor[0]) {
        [req.professor] = professor;
        next();
      } else res.sendStatus(401);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  getUserByEmailWithPasswordAndPassToNext,
  getProfByEmailWithPasswordAndPassToNext,
};
