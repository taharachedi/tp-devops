# Utiliser une image officielle Node.js
FROM node:18

# Définir le dossier de travail dans le container
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers
COPY . .

# Exposer le port que ton app utilise
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "index.js"]