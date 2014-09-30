// REQUERIMIENTOS
var http = require('http');
var express = require('express'),
app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('static-favicon');
var expressSession = require('express-session');
var swig = require('swig');
var rutas = require('./rutas.js');
var allowMethods = function(req, res, next) {
	res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS");
	next();
}

// CONFIGURACIÓN MIDDLEWARE
app.use(allowMethods);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressSession({secret:'tokenSecret', resave: true, saveUninitialized: true}));
app.use(cookieParser());
app.use('/', express.static('public_html'));
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/public_html/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });


app.get("/", rutas.getInicio);

app.post("/datos", rutas.getDataRegister);


app.listen(3000, function(){
  console.log ('Server is running');
});