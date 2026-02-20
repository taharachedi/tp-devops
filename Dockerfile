# Utiliser Node 18 officiel
FROM node:18

# Créer un dossier de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le projet
COPY . .

# Commande par défaut
CMD ["node", "index.js"]