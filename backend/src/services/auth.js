const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT_SECRET, JWT_TIMING } = process.env;

const saltRounds = 10;

const hashPassword = async (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    console.error("Password is missing in the request body");
    return res.status(400).send("Password is required");
  }

  try {
    console.log("je suis dans hashPassword");
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    req.body.hashedPassword = hashedPassword;
    delete req.body.password;
    console.log("Hashed password:", hashedPassword);
    next();
  } catch (err) {
    console.error("Error hashing password:", err);
    res.sendStatus(500);
  }
};

const verifyPassword = async (req, res) => {
  console.log("Hashed password from DB:", req.user.password);
  console.log("Plain password from request:", req.body.password);

  try {
    const isMatch = await bcrypt.compare(req.body.password, req.user.password);
    if (isMatch) {
      const token = jwt.sign({ sub: req.user.id }, JWT_SECRET, {
        algorithm: "HS512",
        expiresIn: JWT_TIMING,
      });
      delete req.user.password;
      res.send({ token, user: req.user });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
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
