var child_process = require('child_process');
var exec = child_process.exec;

// ejecutamos el comando js
exec('ls', function(err, stdout, stderr) {
	// controlamos el error
	if (err) {
		console.log('child process exited with error code', err.code); 
		return;
	}
	// imprimimos el resultado
	console.log(stdout);	
});