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
        if (events == null) {
            return res.status(404).json({"message": "Event not found"});
        }
        
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
        
        var returnedEvent = event;
        return res.status(200).json(returnedEvent);
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

router.put('/api/events/:id', function(req, res, next) {
    var id = req.params.id;
    Event.findById(id, function(err, event) {
        if (err) { return next(err); }
        if (event == null) {
            return res.status(404).json({"message": "Event not found"});
        }
        event.event_id = req.body.event_id;
        event.name = req.body.name;
        event.attendeeIds = req.body.attendeeIds;
        event.description = req.body.description;
        event.clubIds = req.body.clubIds;
        event.scheduleId = req.body.scheduleId;
        event.save();
        res.json(event);
    });
});

router.patch('/api/events/:id', function(req, res, next) {
    var id = req.params.id;
    Event.findById(id, function(err, event) {
        if (err) { return next(err); }
        if (event == null) {
            return res.status(404).json({"message": "Event not found"});
        }
        event.name = (req.body.name || event.name);
        event.event_id = (req.body.event_id || event.event_id);
        event.save();
        res.json(event);
    });
});

router.post('api/users/:id/events', function(req, res, next) {
    var event = new Event({
        event_id: req.body.event_id,
        name: req.body.name,
        scheduleId: req.body.scheduleId,
        description: req.body.description,
        clubId: req.body.clubId,
        //use the user object id
        creatorId: req.params.id,
        attendeeIds: req.body.attendeeIds
        });
    event.save(function (err) {
        if (err) { return next(err); }
        res.status(201).json(event);
    });
    //populate the creatorId field with user details, then print the name
    event.populate('creatorId').exec(function (err, event){
        if (err) return handleError(err);
        console.log('The creator of this event is %s', event.creatorId.name);
    })
});

router.get('/api/users/:id/events', function(req, res, next){
    
    Event
    .find({creatorId: req.params.id})
    .exec(function (err, events){
        if (err) return handleError(err);
        return res.status(200).json({"events": events});
    })

    /* Event
    .find({creatorId: req.params.id})
    .exec(function (err, events){
        if (err) {return next(err); }
        res.status(200).json({"events": events});
    }); */

});

router.get('/api/users/:id/events/:id', function(req, res, next){

});

router.delete('/api/users/:id/events/:id', function(req, res, next){

});

module.exports = router;
