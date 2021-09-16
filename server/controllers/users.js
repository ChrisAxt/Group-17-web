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

router.get('/api/users', function (req, res, next){

    User.find(function(err, users){
        if (err) { return next(err); }
        return res.status(200).json({"users": users});
    });
});

router.delete('/api/users', function (req, res, next){

    User.deleteMany(function(err, users){
        if (err) { return next(err); }
        //TODO: change res message
        return res.status(202).json({"users": users});
    });
});

router.get('/api/users/:id', function (req, res, next){
    
    var id = req.params.id;
     
    User.find({_id: id}, function(err, user){
        if (err) { return next(err); }
        if (user == null) {
            return res.status(404).json({"message": "User not found"});
        }
        
        var returnedUser = user;
        return res.status(200).json(returnedUser);
    })
})

//put and patch

router.delete('/api/users/:id', function(req, res, next) {
    
    var id = req.params.id;
    
    User.findOneAndDelete({_id: id}, function(err, user) {
        if (err) { return next(err); }
        if (user == null) {
            return res.status(404).json({"message": "User not found"});
        }
        return res.status(202).json(user);
    });
});

module.exports = router;
