var express 	= require('express'),
	app			= express(),
	port		= process.env.PORT || 3000,
	bodyParser	= require('body-parser'),
	mongoose  	= require('mongoose'),
	mongodbUri 	= require('mongodb-uri'),
	database 	= require('./config/database');

var uri = 'mongodb://heroku_app32997852:ca4atm9kjr50gg6i398o8habmo@ds029801.mongolab.com:29801/heroku_app32997852';

var mongooseConnectString = mongodbUri.formatMongoose(uri);
mongoose.connect(mongooseConnectString);
// mongoose.connect(database.url);

//Test for connection success
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function callback () {
	console.log('Successfully connected to MongoDB');
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.bodyParser());

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

///////////////////////////////////////////////////////

require('./server/routes.js')(app);

app.listen(port);

console.log('Server is running on port: ' + port);