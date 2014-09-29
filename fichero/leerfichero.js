// Leyendo el contenido de un archivo de texto plano
// author: Carlos Merchán Carmona

var fs = require('fs');

// la manera más rápida es usar la función readFile
fs.readFile('file.txt',{encoding:'utf8'} ,function (err, data) {
  if (err) throw err;
  console.log(data);
});