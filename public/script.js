var socket = io();

var messages = document.getElementById('messages');

socket.on('connect', function() {
  var li = document.createElement('li');
  li.innerText = 'User connected';
  li.style.fontStyle = 'italic';
  li.style.color = '#666';
  messages.appendChild(li);
});
