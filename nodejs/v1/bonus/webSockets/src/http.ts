import 'reflect-metadata';

import { createServer } from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import express from 'express';
import path from 'path';

const app = express();

export const server = createServer(app);

mongoose.connect('mongodb://localhost/rocketsocket', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static(path.join(__dirname, '..', 'public')));

export const io = new Server(server);

io.on('connection', async socket => {
  console.log('Socket', socket.id);
});

app.get('/', (request, response) => {
  return response.json({
    message: 'Hello world',
  });
});
