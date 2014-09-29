// requerimos util y events
var util = require('util'),
EventEmitter = require('events').EventEmitter;

// creamos una clase la cual emitirá un evento cada 4 segundos
var claseConEvento = function(){
	var self = this;
	setInterval(function(){
		self.emit("evento");
	}, 4000);
};
// se registra la clase 
util.inherits(claseConEvento, EventEmitter);


var objeto = new claseConEvento();

// decimos que tiene que hacer cada vez que se reciba un evento
objeto.on("evento", function(){
	console.log("evento cada 4 segundos");
});
