#Dockerfile pour l'application StudyConnect

# Utilisation de l'image de node, je choisis la même version qu'en local
FROM node:20.9.0

# Mise à jour de la liste des paquets et installation de bash et des outils de build nécessaires
RUN apt-get update && apt-get install -y bash build-essential python3

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
