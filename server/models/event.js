var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//TODO: decide whether we are using the generatedID or our own 

var eventSchema = new Schema({
    event_id: {type: String},
    name: {type: String},
    scheduleId: {type: Array},
    description: {type: String},
    clubId: {type: Array},
    creatorId: {type: Schema.Types.ObjectId, ref: 'User'},
    attendeeIds: {type: Array}
});

module.exports = mongoose.model('event', eventSchema);