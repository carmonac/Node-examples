var dgram = require('dgram');
var server = dgram.createSocket('udp4');


server.on('message', function(message) { 
	console.log('Mensaje obtenido: ' + message);
});

var port = 4000;
server.on('listening', function() {
	var address = server.address();
	console.log('Servidor escuechando en ' + address.address + ':' + address.port);
}); 

server.bind(port);

// test: echo hola | nc -u 0.0.0.0 4000