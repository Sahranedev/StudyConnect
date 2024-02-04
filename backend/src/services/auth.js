const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const { JWT_SECRET, JWT_TIMING } = process.env;

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  const { password } = req.body;

  // Vérifier si le mot de passe est fourni
  if (!password) {
    console.error("Password is missing in the request body");
    return res.status(400).send("Password is required");
  }

  argon2
    .hash(password, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.password;
      next();
    })
    .catch((err) => {
      console.error("Error hashing password:", err);
      res.sendStatus(500); // Envoyer un statut 500 pour les erreurs serveur
    });
};

const verifyPassword = (req, res) => {
  console.log("Hashed password from DB:", req.user.password);
  console.log("Plain password from request:", req.body.password);

  argon2
    .verify(req.user.password, req.body.password, hashingOptions)
    .then((isVerified) => {
      if (isVerified) {
        const token = jwt.sign({ sub: req.user.id }, JWT_SECRET, {
          algorithm: "HS512",
          expiresIn: JWT_TIMING,
        });
        delete req.user.password;
        res.send({ token, user: req.user });
      } else res.sendStatus(401);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
    });
};

const verifyToken = (req, res, next) => {
  try {
    const autorizationHeader = req.headers.authorization;
    if (!autorizationHeader)
      throw new Error("Autorization needed for this route");

    const [type, token] = autorizationHeader.split(" ");
    if (type !== "Bearer") throw new Error("Only Bearer token allowed");
    if (!token) throw new Error("Token needed");

    req.payloads = jwt.verify(token, JWT_SECRET);
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
};
