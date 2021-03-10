const express = require('express');

const app = express();
app.use(express.json());

app.get('/courses', (request, response) => {
  const query = request.query;
  console.log('file: index.js ~ line 7 ~ app.get ~ query', query);
  return response.json(['Curso 1', 'Curso 2', 'Curso 3']);
});

app.post('/courses', (request, response) => {
  const body = request.body;
  console.log('file: index.js ~ line 13 ~ app.post ~ body', body);
  return response.json(['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4']);
});

app.put('/courses/:id', (request, response) => {
  const { id } = request.params;
  console.log('file: index.js ~ line 15 ~ app.put ~ params', id);
  return response.json(['Curso 6', 'Curso 2', 'Curso 3', 'Curso 4']);
});

app.patch('/courses/:id', (request, response) => {
  return response.json(['Curso 6', 'Curso 7', 'Curso 3', 'Curso 4']);
});

app.delete('/courses/:id', (request, response) => {
  return response.json(['Curso 6', 'Curso 7', 'Curso 4']);
});

app.listen(3333);
