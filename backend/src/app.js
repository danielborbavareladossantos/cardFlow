import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();
    this.socketServer = require('http').createServer(this.server);
    this.io = require('socket.io')(this.socketServer);

    this.middlewares();
    this.routes();

    let messages = [];

    this.io.on('connection', socket => {
      console.log(`Socket conectado: ${socket.id}`);

      socket.emit('previousMessages',messages);

      socket.on('sendMessage', data => {
        messages.push(data);
        // atualiza nos outros sockets
        socket.broadcast.emit('previousMessages',messages);
        // atualiza no seu proprio
        socket.emit('previousMessages',messages);
      });

      socket.on('loadMessage', () => {
        socket.emit('previousMessages',messages);
      });
    });
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App();
