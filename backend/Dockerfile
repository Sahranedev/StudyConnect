# Dockerfile
FROM node:lts-alpine


# Installation de bash et des outils de build nécessaires pour les dépendances natives
RUN apk add --no-cache bash alpine-sdk python3

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
