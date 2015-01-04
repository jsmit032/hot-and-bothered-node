var Project 				= require('./models/heartrate.js'),
	heartrateController 	= require('./controllers/heartrates-controller.js');

module.exports = function(app) {
	// Project api routes
	app.get('/api/heartrate', heartrateController.getHeartrate);  //index heartrate

	app.post('/api/heartrate', heartrateController.postHeartrate); //create heartrate

	app.put('/api/heartrate/:id', heartrateController.updateHeartrate); //update heartrate

	app.delete('/api/heartrate/:id', heartrateController.deleteHeartrate); //delete heartrate

	//Project functionality 
	app.post('/', heartrateController.addHeartrate);


    // Augular Page renders views/index.ejs
    app.get('*', function(request, response) {
        response.render('index');
    });
};