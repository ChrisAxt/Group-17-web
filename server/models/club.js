var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clubSchema = new Schema({
    name: {type: String, required: 'Club name is required'},
    tag: {type: String},
    description: {type: String},
    //Relationship attributes
    ownerId: {type: Schema.Types.ObjectId, ref: 'User'},
    participantIds: {type: Array}
});

module.exports = mongoose.model('club', clubSchema);