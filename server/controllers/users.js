var express = require('express');
const { Mongoose } = require('mongoose');
const { db } = require('../models/user');
var router = express.Router();
var User = require('../models/user');
var Event = require('../models/event');

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
    //TODO: Change this to match sort function ()
    User.find({_id: id}, function(err, user){
        if (err) { return next(err); }
        if (user == null) {
            return res.status(404).json({"message": "User not found"});
        }
        
        var returnedUser = user;
        return res.status(200).json(returnedUser);
    })
})
//Filter function
router.get('/api/users/filter/:filterBy/:filterValue', function (req, res, next){

    var filter = req.params.filterBy.substring(1);
    var filterValue = req.params.filterValue.substring(1);
    var myFilter = {};
    
    myFilter[filter] = filterValue

    User.find(myFilter, function(err, user){
        if (err) { return next(err); }
        if (user == null || user.length === 0) {
            return res.status(404).json({"message": "User not found"});
        }
        return res.status(200).json(user);
    })
});

//Sorting function
router.get('/api/users/sort/:someAttribute/:order/', function (req, res, next){
   
    var attributeName = req.params.someAttribute.substring(1);
    var theOrder = parseInt(req.params.order.substring(1));
    var mySort = {}; 
    
    mySort[attributeName] = theOrder;

        db.collection("users").find().sort(mySort).toArray(function(err, users) {
            if (err) {throw err};

          return res.status(200).json({"users": users});
          });
});

router.put('/api/users/:id', function(req, res, next) {
    var id = req.params.id;
    User.findById(id, function(err, user) {
        if (err) { return next(err); }
        if (user == null) {
            return res.status(404).json({"message": "User not found"});
        }
        user.universityId = req.body.universityId;
        user.name = req.body.name;
        user.password = req.body.password;
        user.clubIds = req.body.clubIds;
        user.eventIds = req.body.eventIds;
        user.save();
        res.json(user);
    });
});

router.patch('/api/users/:id', function(req, res, next) {
    var id = req.params.id;
    User.findById(id, function(err, user) {
        if (err) { return next(err); }
        if (user == null) {
            return res.status(404).json({"message": "User not found"});
        }
        user.name = (req.body.name || user.name);
        user.password = (req.body.password || user.password);
        user.save();
        res.json(user);
    });
});

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

//Below: relationship requests

router.post('/api/users/:user_id/events', function(req, res, next) {
    var event = new Event(req.body);
    event.creatorId = req.params.user_id; 
    event.save(function (err) {
        if (err) { return next(err); }
        res.status(201).json(event);
    });

    //populate the creatorId field with user details
    //TODO: check why this doesn't work anymore.
    event.populate('creatorId').exec(function (err, event){
        if (err) return handleError(err);
    });

});

router.get('/api/users/:user_id/events', function(req, res, next){

    Event
    .find({creatorId: req.params.user_id})
    .exec(function (err, events){
        if (err) {return next(err); }
        res.status(200).json({"events": events});
    });

});

router.get('/api/users/:user_id/events/:event_id', function(req, res, next){

    User.findById({_id: req.params.user_id}, function(err, user){
        if (err) {return next(err); }
        if (user == null) {
            return res.status(404).json({"message": "user not found"});
        }
        Event.findById({_id: req.params.event_id}, function(err, event){
            if (err) {return next(err); }
            if (event == null) {
                return res.status(404).json({"message": "event not found"});
            }
            res.status(200).json({"event": event});
        });
    });
});

router.delete('/api/users/:user_id/events/:event_id', function(req, res, next){

    Event.findByIdAndDelete({_id: req.params.event_id}, function(err, event){
        if (err) {return next(err); }
        if (event == null) {
            return res.status(404).json({"message": "event not found"});
        }
        if (event.creatorId != req.params.user_id) {
            return res.status(403).json({"message": "forbidden request"});
        }
        res.status(202).json({event});
    })    
});

module.exports = router;

