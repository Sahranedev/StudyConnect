const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

const routesDirectory = path.join(__dirname, "routes");
fs.readdirSync(routesDirectory).forEach((file) => {
  const route = require(path.join(routesDirectory, file));
  app.use(route);
});

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// Prêt à être exporté
module.exports = app;
