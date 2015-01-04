var mongoose 	= require('mongoose'),
	Schema 		= mongoose.Schema;

var HeartrateSchema = new Schema({

	phoneNumber: 'String',
	heartrateBPM: Number,
	DateTime: Date,
	source: 'String'

});

module.exports = mongoose.model('heartrate', HeartrateSchema);