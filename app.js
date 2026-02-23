const express = require('express');
const app = express();

app.use(express.json());

let todos = [];

app.get('/', (req, res) => {
  res.json({ message: "Todo API Running Successfully" });
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = req.body;
  if (!todo.task) {
    return res.status(400).json({ error: "Task required" });
  }
  todos.push(todo);
  res.status(201).json(todo);
});

module.exports = app;
