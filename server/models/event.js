var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//TODO: decide whether we are using the generatedID or our own 

var eventSchema = new Schema({
    event_id: {type: String},
    name: {type: String},
    scheduleId: {type: String},
    description: {type: String},
    attendeeIds: {type: String}
});

module.exports = mongoose.model('event', eventSchema);