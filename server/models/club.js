var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clubSchema = new Schema({
    club_id: {type: String},
    name: {type: String},
    tag: {type: String},
    description: {type: String}

});

module.exports(mongoose.model('club', clubSchema));