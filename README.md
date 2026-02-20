# Todo App Moderne

Une application web de gestion de tâches (Todo App) développée avec Node.js et Express, disposant d’un design moderne et responsive.  
Le projet inclut des tests automatisés, Dockerisation complète et un pipeline CI via GitHub Actions.

---

## 📌 Description du Projet

Cette application permet de gérer des tâches quotidiennes avec une interface moderne et interactive.  
Elle a été développée dans le cadre d’un TP DevOps afin d’appliquer les concepts suivants :

- Développement backend avec Node.js
- Architecture REST API
- Tests automatisés
- Conteneurisation avec Docker
- Intégration Continue (CI)

---

## 🚀 Fonctionnalités

- Ajouter une tâche
- Supprimer une tâche
- Marquer une tâche comme terminée
- Définir une priorité (Basse / Moyenne / Haute)
- Ajouter une date limite
- Filtrer les tâches (Toutes / À faire / Terminées)
- Interface moderne avec design responsive
- Tests unitaires automatisés
- Pipeline CI automatique

---

## 🛠️ Technologies Utilisées

- Node.js
- Express.js
- Jest (tests)
- Supertest (tests API)
- Docker
- Docker Compose
- GitHub Actions (CI/CD)
- HTML / CSS / JavaScript (Frontend)

---

## 📂 Structure du Projet

```
todo-app/
│
├─ public/                # Frontend (HTML, CSS, JS)
├─ routes/                # Routes API
├─ tests/                 # Tests unitaires
├─ Dockerfile
├─ docker-compose.yml
├─ index.js
├─ package.json
└─ .github/workflows/ci.yml
```

---

## 💻 Installation en Local

### 1️⃣ Cloner le dépôt

```bash
git clone https://github.com/taharachedi/tp-devops.git
cd tp-devops/todo-app
```

### 2️⃣ Installer les dépendances

```bash
npm install
```

### 3️⃣ Lancer l’application

```bash
node index.js
```

Accéder ensuite à :

```
http://localhost:3000
```

---

## 🐳 Lancement avec Docker

### Construire et lancer le conteneur :

```bash
docker-compose up --build
```

L’application sera disponible sur :

```
http://localhost:3000
```

---

## 🧪 Tests

Pour exécuter les tests :

```bash
npm test
```

Les tests vérifient :

- GET /tasks
- POST /tasks
- PUT /tasks/:id
- DELETE /tasks/:id

Tous les tests doivent passer avec succès.

---

## 🔁 Intégration Continue (CI)

Le pipeline GitHub Actions exécute automatiquement :

1. npm install
2. npm test
3. docker build

Le fichier de configuration se trouve ici :

```
.github/workflows/ci.yml
```

Le workflow se déclenche automatiquement à chaque push sur la branche main.

---

## 🎨 Design

- Interface moderne avec dégradé violet → bleu
- Layout centré et responsive
- Boutons interactifs
- Badges de priorité colorés
- Expérience utilisateur améliorée

---

## 🔮 Améliorations Futures

- Intégration d’une base de données (MongoDB ou PostgreSQL)
- Authentification utilisateur
- Déploiement cloud (Render, Heroku, Docker Hub)
- Ajout ESLint pour qualité du code
- Notifications pour les dates limites

---

## 📄 Licence

Projet réalisé dans le cadre du TP DevOps  
ENSIM – Génie Informatique  

Auteur : **Taha RACHEDI**
