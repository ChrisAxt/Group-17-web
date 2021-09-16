var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    user_id: {type: String},
    name: {type: String},
    password: {type: String}
});

module.exports(mongoose.model('users', userSchema));