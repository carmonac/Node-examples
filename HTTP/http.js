// ejemplo servidor http
// author: Carlos Merchán Carmona

// requerimos el módulo http
var http = require('http');
 
// a la función que createServer le pasamos una función como parámetro en la que tenemos dos parámetros
// request es la entrada de la petición al servidor y response es la salida.
// listen es la función que indicará en que puerto debe escuchar

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hola mundo\n');
}).listen(8000);
 
console.log('Servidor corriendo');