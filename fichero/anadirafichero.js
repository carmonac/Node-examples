// Añadiendo texto a un archivo de texto ya creado
// author: Carlos Merchán Carmona

var fs = require('fs');

// la función appendFile nos facilita el trabajo a la hora de añadir contenido aun fichero existente
fs.appendFile('file.txt', 'Texto añadido\n', function (err) {
	if (err) throw 'Error al escribir el archivo: ' + err;
	console.log("Texto añadido al archivo");
}); 



// Otra manera

fs.open('file.txt', 'a', 666, function( e, id ) {
  fs.write( id, 'Texto añadido con el archivo abierto en modo añadir', null, 'utf8', function(){
    fs.close(id, function(){
      console.log('Cerrando archivo');
    });
  });
});