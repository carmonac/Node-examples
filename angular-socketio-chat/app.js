'use strict';

// globales
var express = require('express'),
    io = require('socket.io'),
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    io = io.listen(server),
    path = require('path'),
    favicon = require('static-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');


require('./sockets/base')(io);

// start the server
server.listen(3000);

// socket.io logging level
io.set('log level', 1000);

// engine para renderizar html
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// middleware settings
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));

// directorio que contiene los archivos publicos
app.use(express.static(__dirname +  '/public'));

/// error 404 si no hay una petición erronea
app.use(function (req, res, next) {
  var err = new Error('No encontrado');
  err.status = 404;
  next(err);
});

// En caso de error renderizamos la pagina de error
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

