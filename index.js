const express = require('express');
const compression = require('compression')
const path = require('path');
const app = express();
const sslRedirect = require('heroku-ssl-redirect');
var server = require('http').createServer(app);
// enable ssl redirec
app.use(sslRedirect());
app.use(compression())

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

//    Create web socket server
const io = require('socket.io')(server);
let startedTime = new Date().getTime();

io.on('connection', function(socket) {
  try {
    console.log('CLIENT CONNECTED');
    socket.emit('created', startedTime);
  } catch (e) {
    console.log('exception: ', e);
  }
});

server.listen(process.env.PORT || 8080, () => {
  console.log('App is listening on port ', + (process.env.PORT || 8080));
});