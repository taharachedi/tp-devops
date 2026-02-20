// index.js
const express = require('express');
const bodyParser = require('body-parser');
const tasksRouter = require('./routes/tasks');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/tasks', tasksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));