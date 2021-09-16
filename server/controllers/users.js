var express = require('express');
const { Mongoose } = require('mongoose');
var router = express.Router();
var User = require('../models/user');

router.post('/api/users', function (req, res, next) {
    var user = new User(req.body);
    user.save(function (err) {
        if (err) { return next(err); }
        res.status(201).json(user);
    });
});

router.delete('/api/users/:id', function(req, res, next) {
    
    var id = req.params.id;
    
    User.findOneAndDelete({_id: id}, function(err, user) {
        if (err) { return next(err); }
        if (user == null) {
            return res.status(404).json({"message": "User not found"});
        }
        res.json(user);
    });
});

module.exports = router;
