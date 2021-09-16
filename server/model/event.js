var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    _id: {type: String},
    name: {type: String},
    location: {type: String},
    time: {type: Number},
    description: {type: String}

});

module.exports(mongoose.model('event', eventSchema));