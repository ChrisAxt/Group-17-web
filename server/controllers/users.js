var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    _id: {type: String},
    name: {type: String},
    password: {type: String}
});

var User = mongoose.model('users', userSchema);

router.post('/api/users', function(req, res, next){
    var user = new User({
        "_id": 0,
        "name": "insertName",
        "password": "password"
    })
    user.save(function(err, user){
        if(err){return console.error(err);}
        res.status(201).json(user);
    })
    res.status(201).json(user);
});

module.exports = router;