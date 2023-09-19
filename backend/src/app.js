const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Utilisez des middlewares au niveau de l'application
app.use(express.json());

// Servez le dossier public pour les ressources publiques
app.use(express.static(path.join(__dirname, '../public')));

// Servez l'application REACT
app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'dist')));

// Charger dynamiquement tous les fichiers de route
const routesDirectory = path.join(__dirname, 'routes');
fs.readdirSync(routesDirectory).forEach((file) => {
  const route = require(path.join(routesDirectory, file));
  app.use(route);
});

// Redirigez toutes les requêtes vers l'application REACT
const reactIndexFile = path.join(
  __dirname,
  '..',
  '..',
  'frontend',
  'dist',
  'index.html',
);

if (fs.existsSync(reactIndexFile)) {
  app.get('*', (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// Prêt à être exporté
module.exports = app;
