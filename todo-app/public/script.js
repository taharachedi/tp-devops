// script.js

const taskInput = document.getElementById('new-task');
const addBtn = document.getElementById('add-btn');
const tasksList = document.getElementById('tasks-list');
const prioritySelect = document.getElementById('priority');
const dueDateInput = document.getElementById('due-date');
const filterBtns = document.querySelectorAll('.filter-btn');

// Fonction pour créer un élément de tâche dans le DOM
function createTaskElement(task) {
  const li = document.createElement('li');
  if (task.completed) li.classList.add('completed');

  li.dataset.id = task.id;

  const infoDiv = document.createElement('div');
  infoDiv.className = 'task-info';

  const titleSpan = document.createElement('span');
  titleSpan.className = 'task-title';
  titleSpan.textContent = task.title;

  const metaSpan = document.createElement('span');
  metaSpan.className = 'task-meta';
  metaSpan.innerHTML = `📅 ${task.dueDate || 'Aucune'} • <span class="priority-tag ${task.priority}">${task.priority}</span>`;

  infoDiv.appendChild(titleSpan);
  infoDiv.appendChild(metaSpan);

  const actionsDiv = document.createElement('div');
  actionsDiv.className = 'task-actions';

  const completeBtn = document.createElement('button');
  completeBtn.className = 'complete-btn';
  completeBtn.textContent = '✔';
  completeBtn.onclick = () => toggleComplete(task.id);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = '🗑';
  deleteBtn.onclick = () => deleteTask(task.id);

  actionsDiv.appendChild(completeBtn);
  actionsDiv.appendChild(deleteBtn);

  li.appendChild(infoDiv);
  li.appendChild(actionsDiv);

  return li;
}

// Charger les tâches depuis le backend
async function loadTasks() {
  const res = await fetch('/api/tasks');
  const tasks = await res.json();
  tasksList.innerHTML = '';
  tasks.forEach(task => tasksList.appendChild(createTaskElement(task)));
}

// Ajouter une tâche
addBtn.addEventListener('click', async () => {
  const title = taskInput.value.trim();
  if (!title) return alert('Veuillez entrer un titre de tâche');

  const task = {
    title,
    priority: prioritySelect.value,
    dueDate: dueDateInput.value,
  };

  const res = await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  });

  taskInput.value = '';
  dueDateInput.value = '';
  await loadTasks();
});

// Supprimer une tâche
async function deleteTask(id) {
  await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
  await loadTasks();
}

// Marquer une tâche comme terminée
async function toggleComplete(id) {
  await fetch(`/api/tasks/${id}`, { method: 'PUT' });
  await loadTasks();
}

// Filtres
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    loadTasksWithFilter(btn.dataset.filter);
  });
});

async function loadTasksWithFilter(filter) {
  const res = await fetch('/api/tasks');
  let tasks = await res.json();

  if (filter === 'completed') tasks = tasks.filter(t => t.completed);
  if (filter === 'pending') tasks = tasks.filter(t => !t.completed);

  tasksList.innerHTML = '';
  tasks.forEach(task => tasksList.appendChild(createTaskElement(task)));
}

// Initialisation
loadTasks();