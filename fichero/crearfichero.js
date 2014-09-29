// Creación de un fichero
// author: Carlos Merchán Carmona

// importamos el módulo file system
var fs = require('fs');

// especificamos el nombre del fichero y un objeto tipo Buffer para poder almacenar el texto que debemos escribir.
var path = 'file.txt',
buffer = new Buffer("Este es el texto que escribiremos en el archivo\n");

// con open abrimos fichero y con 'w' lo marcamos como modo escritura
fs.open(path, 'w', function(err, fd) {
    if (err) {
    	// control de error
        throw 'Error al abrir archivo: ' + err;
    } else {
    	// una vez abierto el archivo vamos a pasar a escribir en él con write
        fs.write(fd, buffer, 0, buffer.length, null, function(err) {
            if (err) throw 'Error al escribir el archivo: ' + err;
            fs.close(fd, function() {
                console.log('Archivo escrito');
            })
        });
    }
});

/*

// manera simple con writeFile
fs.writeFile('file.txt', 'Primer texto\n', function (err) {
  if (err) throw err;
  console.log('Creado fichero');
});

*/
