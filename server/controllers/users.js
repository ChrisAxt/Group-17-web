var express = require('express');
const { Mongoose } = require('mongoose');
const { db } = require('../models/user');
var router = express.Router();
var User = require('../models/user');
var Event = require('../models/event');

router.post('/api/users', function (req, res, next) {
    
    var user = new User(req.body);
    user.save(function (err) {
        if (err) { 
            res.status(400).json({"message": "post failed"});
            return next(err);
            }
        res.status(201).json(user);
    });
});

router.get('/api/users', function (req, res, next){

    User.find(function(err, users){
        if (err) { 
            res.status(500).json({"message": "get failed"});
            return next(err);
        }
        if (users.length === 0 || users == null){
            return res.status(404).json({"message": "empty collection"});
        }
        res.status(200).json({"users": users});
    });

});

router.delete('/api/users', function (req, res, next){

    
    User.find(function(err, users){
        if (err) { 
            res.status(500).json({"message": "get failed"});
            return next(err);
        }
        if (users.length === 0){
            return res.status(404).json({"message": "empty collection"});
        }
        User.deleteMany(function(err, users){
            if (err) { 
                res.status(500).json({"message": "delete all failed"});
                return next(err); 
            }
            return res.status(202).json({"deleted users": users});
        });
    });    

});

router.get('/api/users/:id', function (req, res, next){
    
    User.findById({_id: req.params.id}, function(err, user){
        if (err) { 
            res.status(500).json({"message": "get failed"}); 
            return next(err);
        }
        if (user == null) {
            res.status(404).json({"message": "user not found"});
        }
        res.status(200).json(user);
    });

});

//Filter function
router.get('/api/users/filter/:filterBy/:filterValue', function (req, res, next){

    var filter = req.params.filterBy;
    var filterValue = req.params.filterValue;
    var myFilter = {};
    
    myFilter[filter] = filterValue

    User.find(myFilter, function(err, users){
        if (err) { return next(err); }
        if (users == null || users.length === 0) {
            return res.status(404).json({"message": "Users not found"});
        }
        res.status(200).json(users);
    });
});

//Sorting function
router.get('/api/users/sort/:someAttribute/:order/', function (req, res, next){
   
    var attributeName = req.params.someAttribute.substring(1);
    var theOrder = parseInt(req.params.order.substring(1));
    var mySort = {}; 
    
    mySort[attributeName] = theOrder;
    
    db.collection("users").find().sort(mySort).toArray(function(err, users) {
        if (err) {
            res.status(500).json({"message": "get failed"});
            return next(err)
        };
        res.status(200).json({"users": users});
    });
});

router.put('/api/users/:id', function(req, res, next) {
    
    User.findById({_id: req.params.id}, function(err, user) {
        if (err) { 
            res.status(500).json({"message": "put failed"});
            return next(err); }
        if (user == null) {
            return res.status(404).json({"message": "User not found"});
        }
        user.universityId = req.body.universityId;
        user.name = req.body.name;
        user.password = req.body.password;
        user.clubIds = req.body.clubIds;
        user.eventIds = req.body.eventIds;
        user.save();
        res.status(200).json({"user updated via put": user});
    });
});

router.patch('/api/users/:id', function(req, res, next) {
    
    User.findById({_id: req.params.id}, function(err, user) {
        if (err) { 
            res.status(500).json({"message": "patch failed"});
            return next(err); }
        if (user == null) {
            return res.status(404).json({"message": "User not found"});
        }
        user.name = (req.body.name || user.name);
        user.password = (req.body.password || user.password);
        user.save();
        res.status(200).json({"user updated via patch": user});
    });
});

router.delete('/api/users/:id', function(req, res, next) {
    
    User.findOneAndDelete({_id: req.params.id}, function(err, user) {
        if (err) { 
            res.status(500).json({"message": "delete failed"});
            return next(err); }
        if (user == null) {
            return res.status(404).json({"message": "User not found"});
        }
        res.status(200).json({"user deleted": user});
    });
});

//Below: relationship requests
router.post('/api/users/:user_id/events', function(req, res, next) {

    var event = new Event(req.body);
    event.creatorId = req.params.user_id; 
    
    event.save(function (err) {
        if (err) { 
            res.status(400).json({"message": "post failed"});
            return next(err);
        }
        res.status(201).json({"event created": event});
    });
});

router.get('/api/users/:user_id/events', function(req, res, next){

    Event
    .find({creatorId: req.params.user_id})
    .exec(function (err, events){
        if (err) { 
            res.status(500).json({"message": "get failed"});
            return next(err); }
        res.status(200).json({"events": events});
    });
});

router.get('/api/users/:user_id/events/:event_id', function(req, res, next){

    Event.findOne({_id: req.params.event_id, creatorId: req.params.user_id}, function(err, event){
        if (err) {
            res.status(500).json({"message": "get failed"});
            return next(err); }
        if (event == null) {
            return res.status(404).json({"message": "event not found"});
        }
        res.status(200).json({"event": event});
    });
});

router.delete('/api/users/:user_id/events/:event_id', function(req, res, next){

    Event.findOneAndDelete({_id: req.params.event_id, creatorId: req.params.user_id}, function(err, event){
        if (err) {
            res.status(500).json({"message": "delete failed"});
            return next(err);
        }
        if (event == null) {
            return res.status(404).json({"message": "event not found"});
        }
        res.status(202).json({"event deleted": event});
    });
});

module.exports = router;

