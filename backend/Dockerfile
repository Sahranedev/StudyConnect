# Dockerfile
FROM node:lts-alpine

# Installer bash
RUN apk add --no-cache bash

# Déclaration de l'environnement
ENV NODE_ENV development

# Configuration du répertoire de travail
WORKDIR /express-js

# Copie des fichiers du projet
COPY . .

# Installation des dépendances
RUN npm install

# Génération du client Prisma
RUN npx prisma generate

# Commande pour démarrer l'application
CMD ["node", "./src/models/index.js"]

# Exposition du port du serveur
EXPOSE 5000
