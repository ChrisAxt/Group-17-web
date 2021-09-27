var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    universityId: {type: String, required: 'University id is required'},
    name: {type: String},
    password: {type: String, required: 'User password is required'},
    //Relationship attributes
    clubIds: {type: Array},
    eventIds: {type: Array}
});

module.exports = mongoose.model('users', userSchema);