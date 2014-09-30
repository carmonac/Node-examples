var join = require('path').join;


exports.getInicio = function(req, res){
	res.sendFile(join(__dirname, 'public_html/index.html'));
}
exports.getDataRegister = function(req, res){
	var dataUser = {
		fecha: new Date(),
		nombre: req.body.nombre,
		email: req.body.email,
		password: req.body.password
	};

	res.render('data',dataUser);
}


