//io('http://midominio.com') <- suele usarse adipisicing
//este socket es el codigo del front end que enviara los enventos al servidor
const socket = io();

//elementos del dom
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', function(){
  var msgtemp = message.value;
  message.value = "";
  if(username.value == ""){
    alert("Debes loguear para poder enviar mensajes");
  }else if(msgtemp != ""){
    socket.emit('chat-message', {
      message: msgtemp,
      username: username.value
    });
  }else{
    alert("no has escrito ningun mensaje!!");
  }
});

socket.on('mensaje', function (data) {
  output.innerHTML += '<p><strong>'+data.username+'</strong>:'+data.message+'</p>'
});
