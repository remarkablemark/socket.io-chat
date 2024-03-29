var socket = io();

var form = document.getElementById('form');
var input = document.getElementById('input');
var messages = document.getElementById('messages');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (input.value) {
    socket.emit('message', input.value);
    input.value = '';
  }
});

socket.on('connect', function() {
  var li = document.createElement('li');
  li.innerText = 'User connected';
  li.className = 'status';
  messages.appendChild(li);
});

socket.on('disconnect', function() {
  var li = document.createElement('li');
  li.innerText = 'User disconnected';
  li.className = 'status';
  messages.appendChild(li);
});

socket.on('message', function(message) {
  var li = document.createElement('li');
  li.innerText = message;
  messages.appendChild(li);
});
