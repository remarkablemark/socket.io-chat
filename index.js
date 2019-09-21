const express = require('express');
const http = require('http');

const app = express();
const server = http.Server(app);

app.use(express.static('public'));

const PORT = 3000;
server.listen(PORT, () => console.log(`Listening on *:${PORT}`));
