// routes/tasks.js
const express = require('express');
const router = express.Router();

let tasks = [];
let nextId = 1;

// GET toutes les tâches
router.get('/', (req, res) => res.json(tasks));

// POST créer une tâche
router.post('/', (req, res) => {
  const { title, priority, dueDate } = req.body;
  const newTask = { id: nextId++, title, priority, dueDate, completed: false };
  tasks.push(newTask);
  res.json(newTask);
});

// PUT marquer comme terminée
router.put('/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (task) task.completed = !task.completed;
  res.json(task);
});

// DELETE supprimer
router.delete('/:id', (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ success: true });
});

module.exports = router;