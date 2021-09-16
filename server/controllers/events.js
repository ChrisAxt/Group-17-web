var express = require('express');
const { Mongoose } = require('mongoose');
var router = express.Router();
var Event = require('../models/event');

router.post('/api/events', function (req, res, next) {
    
    var event = new Event(req.body);
    event.save(function (err) {
        if (err) { return next(err); }
        res.status(201).json(event);
    });
});

router.get('/api/events', function (req, res, next){

    Event.find(function(err, events){
        if (err) { return next(err); }
        return res.status(200).json({"events": events});
    });
});

router.delete('/api/events', function (req, res, next){

    Event.deleteMany(function(err, events){
        if (err) { return next(err); }
        //TODO: change res message
        return res.status(202).json({"events": events});
    });
});

router.get('/api/events/:id', function (req, res, next){
    
    var id = req.params.id;
     
    Event.find({_id: id}, function(err, event){
        if (err) { return next(err); }
        if (event == null) {
            return res.status(404).json({"message": "Event not found"});
        }
        
        var returnedUser = event;
        return res.status(200).json(returnedUser);
    })
})

//put and patch

router.delete('/api/events/:id', function(req, res, next) {
    
    var id = req.params.id;
    
    Event.findOneAndDelete({_id: id}, function(err, event) {
        if (err) { return next(err); }
        if (event == null) {
            return res.status(404).json({"message": "Event not found"});
        }
        return res.status(202).json(event);
    });
});

module.exports = router;