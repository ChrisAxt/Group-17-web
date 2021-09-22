var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    user_id: {type: String, required: 'User id is required'},
    name: {type: String},
    password: {type: String},
    clubIds: {type: Array},
    eventIds: {type: Array}
});

module.exports = mongoose.model('users', userSchema);