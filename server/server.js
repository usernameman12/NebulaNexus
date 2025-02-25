const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', routes(io));

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
