var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var announcementSchema = new Schema({
    title: {type: String/* , required: 'Title is required'  */},
    body: {type: String},
    //Relationship attributes
    creatorId: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('announcements', announcementSchema);