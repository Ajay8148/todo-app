const express = require('express');
const app = express();

app.use(express.json());

let todos = [];

app.get('/', (req, res) => {
  res.json({ message: "Todo API v1 Running" });
});

app.get('/todos', (req, res) => {
  res.json(todos);
});
app.get("/health", (req, res) => {
  res.send("OK");
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
