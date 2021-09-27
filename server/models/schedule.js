var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scheduleSchema = new Schema({
    location: {type: String},
    date: {type: Date}
});

module.exports = mongoose.model('schedule', scheduleSchema);