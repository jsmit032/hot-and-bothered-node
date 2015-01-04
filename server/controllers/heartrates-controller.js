var Heartrate  	= require('../models/heartrate.js');

function getHeartrate (request, response) {

	Heartrate.find(function(error, data){
		if (error) console.log(error);
		response.status(200).json(data);
	})

}

function postHeartrate (request, response) {

	var heartrate = new Heartrate();

	heartrate.phoneNumber = request.body.phoneNumber;
	heartrate.heartrateBPM = request.body.heartrateBPM;
	heartrate.DateTime = request.body.DateTime;
	heartrate.source = request.body.source;

	heartrate.save(function(error){
		if (error) console.log(error);
		response.status(201).json({ message: 'heartrate was created successfully!' });
	});

}

function updateHeartrate (request, response) {

	Heartrate.findById(request.params.id,
		function(error, heartrate){
			if (error) console.log(error);
			heartrate.phoneNumber = request.body.phoneNumber;
			heartrate.heartrateBPM = request.body.heartrateBPM;
			heartrate.DateTime = request.body.DateTime;
			heartrate.source = request.body.source;

			heartrate.save(function(error){
				response.status(202).json({ message: 'heartrate was successfully updated!' });
			})
		}
	);

}

function deleteHeartrate (request, response) {

	Heartrate.remove({ _id: request.params.id }, 
		function(error, data){
			if (error) console.log(error);
			response.status(202).json({ message: 'heartrate successfully deleted!' });
		}
	);

}

function addHeartrate (request, response) {

	console.log('in the signup controller');
	console.log(request.body);

	var newHeartrate = new Heartrate();

	newHeartrate.phoneNumber = request.body.phoneNumber;
	newHeartrate.heartrateBPM = request.body.heartrateBPM;
	newHeartrate.DateTime = request.body.DateTime;
	newHeartrate.source = request.body.source;

	newHeartrate.save(function(error){
		if (error) console.log('Unable to save new heartrate b/c: ', error);
		console.log('Heartrate Saved!');
		console.log(newHeartrate);
	});

	response.redirect('/');

};

module.exports = {

	getHeartrate: getHeartrate,
	postHeartrate: postHeartrate,
	updateHeartrate: updateHeartrate,
	deleteHeartrate: deleteHeartrate,
	addHeartrate: addHeartrate

}