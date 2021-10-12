var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var eventSchema = new Schema({
    name: {type: String, unique: true, required: 'Event name is required'},
    description: {type: String},
    isPublic: {type: Boolean},
    location: {type: String},
    date: {type: Date},
    //Relationship attributes
    creatorId: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('event', eventSchema);