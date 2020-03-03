const path = require('path'); //modulo para trabajar con rutas
const express = require('express'); //monta el servidor
const app = express();
const SocketIO = require('socket.io'); //<- comunicar servidor y cliente


//configurar puerto
app.set('port', process.env.PORT || 3000);

//archivos estaticos - static files
//path(__dirname , 'public') <- con esto unimos dirname y public independientemente
//de si un slash de windows o linux
//con esto ya enviamos el index.html al navegador
app.use(express.static(path.join(__dirname , 'public')));

//iniciar servidor y lo guardamos en la variable servidor
const server = app.listen(app.get('port'), () => {
  console.log('server on port',app.get('port'))
});

//le pasamos el servidor al cliente y lo guardamos en la variasble io
//que mantendra la conexion
const io = SocketIO(server);

//websockets - los cliente web!!!, aqui escucharemos enventos
//y el primero que debemos escuchar es cuando se conecta un cliente

io.on('connection', (socket) => {
  socket.on('chat-message', (data) => {
    io.sockets.emit('mensaje', data);
  });
});
