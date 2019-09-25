const Server = require('socket.io');
const server = require('./server');

const io = new Server(server);

io.on('connection', socket => {
  console.log('User connected:', socket.id);

  socket.on('message', message => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    io.emit('disconnect');
    console.log('User disconnected:', socket.id);
  });
});
