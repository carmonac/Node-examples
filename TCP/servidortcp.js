var server = require('net').createServer(function(socket){
	
	socket.setEncoding('utf8');
	
	socket.write("Para terminar la conexión escribe 'salir'.\n");
	
	socket.on('data', function(data) { 
		console.log('Dato recibido:', data.toString())
		if (data.trim().toLowerCase() === 'salir') {
			socket.write('Cerrando\n');
			return socket.end(); 
		}
		socket.write(data); 
	});
	socket.on('end', function() { 
		console.log('conexión de cliente cerrada');
	});
});

var port = 4001;

server.on('listening', function() { 
	console.log('Servidor escuchando en puerto ', port);
});

server.on('connection', function(socket) { 
	console.log('Servidor tiene una conexión'); 
	//socket.end();
});

server.on('close', function() { 
	console.log('Servidor cerrado');
});

server.on('error', function(err) { 
	console.log('Error:', err.message);
}); 

server.listen(port);

// probar con telnet o nc por ejemplo