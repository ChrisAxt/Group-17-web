var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scheduleSchema = new Schema({
    location: {type: String},
    time: {type: String},
    day: {type: String},
    week: {type: Number},
    month: {type: String},
    year: {type: Number}
});

module.exports = mongoose.model('schedule', scheduleSchema);