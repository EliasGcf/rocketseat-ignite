const express = require("express");
const cors = require("cors");

const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const userExists = users.find((user) => user.username === username);

  if (!userExists) {
    return response.status(404).json({ error: "User not found" });
  }

  request.user = userExists;

  return next();
}

function checksIfTodoExists(request, response, next) {
  const { id } = request.params;
  const { user } = request;

  const todo = user.todos.find((todo) => todo.id === id);

  if (!todo) {
    return response.status(404).json({ error: "Todo not found" });
  }

  request.todo = todo;

  return next();
}

app.post("/users", (request, response) => {
  const { name, username } = request.body;

  const userExists = users.some((user) => user.username === username);

  if (userExists) {
    return response.status(400).json({ error: "User already exists" });
  }

  const user = {
    id: uuidv4(),
    name,
    username,
    todos: [],
  };

  users.push(user);

  return response.status(201).json(user);
});

app.get("/todos", checksExistsUserAccount, (request, response) => {
  const { user } = request;

  return response.json(user.todos);
});

app.post("/todos", checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { title, deadline } = request.body;

  const todo = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date(),
  };

  user.todos.push(todo);

  return response.status(201).json(todo);
});

app.put(
  "/todos/:id",
  checksExistsUserAccount,
  checksIfTodoExists,
  (request, response) => {
    const { todo } = request;
    const { title, deadline } = request.body;

    todo.title = title;
    todo.deadline = new Date(deadline);

    return response.json(todo);
  }
);

app.patch(
  "/todos/:id/done",
  checksExistsUserAccount,
  checksIfTodoExists,
  (request, response) => {
    const { todo } = request;

    todo.done = true;

    return response.json(todo);
  }
);

app.delete(
  "/todos/:id",
  checksExistsUserAccount,
  checksIfTodoExists,
  (request, response) => {
    const { id } = request.params;
    const { user } = request;

    user.todos = user.todos.filter((todo) => todo.id !== id);

    return response.status(204).json();
  }
);

module.exports = app;
