var express = require('express');
const { Mongoose } = require('mongoose');
var router = express.Router();
var Event = require('../models/event');

router.post('/api/events', function (req, res, next) {
    
    //TODO: this gives error
    var event = new Event(req.body);
    event.save(function (err) {
        if (err) { 
            res.status(400).json({"message": "post failed"});
            return next(err); 
        }
        res.status(201).json(event);
    });
   
    /* try {
        var event = new Event(req.body)
        event.save();
    } catch(err) {
        return res.status(400).json({"message": "post failed"});
    }
    return res.status(201).json(event); */
});

router.get('/api/events', function (req, res, next){

    Event.find(function(err, events){
        if (err) { 
            res.status(500).json({"message": "get failed"});
            return next(err); 
        }
        if (events.length === 0 || events == null) {
            return res.status(404).json({"message": "empty collection"});
        }
        res.status(200).json({"events": events});
    });
});

router.delete('/api/events', function (req, res, next){

    Event.find(function(err, events){
        if (err) { 
            res.status(500).json({"message": "get failed"});
            return next(err);
        }
        if (events.length === 0){
            return res.status(404).json({"message": "empty collection"});
        }
        Event.deleteMany(function(err, events){
            if (err) { 
                res.status(500).json({"message": "delete all failed"});
                return next(err); 
            }
            return res.status(202).json({"deleted events": events});
        });
    });

    /* Event.deleteMany(function(err, events){
        if (err) { return next(err); }
        return res.status(202).json({"deleted events": events});
    }); */
});

router.get('/api/events/:id', function (req, res, next){
     
    Event.findById({_id: req.params.id}, function(err, event){
        if (err) { 
            return res.status(500).json({"message": "get failed"}); 
        }
        if (event == null) {
            return res.status(404).json({"message": "event not found"});
        }
        res.status(200).json(event);
    });
})

router.delete('/api/events/:id', function(req, res, next) {
    
    Event.findOneAndDelete({_id: req.params.id}, function(err, event) {
        if (err) { 
            res.status(500).json({"message": "delete failed"});
            return next(err); }
        if (event == null) {
            return res.status(404).json({"message": "event not found"});
        }
        res.status(200).json({"event deleted": event});
    });
});

router.put('/api/events/:id', function(req, res, next) {

    Event.findById({_id: req.params.id}, function(err, event) {
        if (err) { 
            res.status(500).json({"message": "put failed"});
            return next(err); }
        if (event == null) {
            return res.status(404).json({"message": "Event not found"});
        }
        event.event_id = req.body.event_id;
        event.name = req.body.name;
        event.description = req.body.description;
        event.isPublic = req.body.isPublic;
        event.location = req.body.location;
        event.date = req.body.date;
        event.clubId = req.body.clubId;
        event.creatorId = req.body.creatorId;
        event.attendeeIds = req.body.attendeeIds;
        event.save();
        res.status(200).json({"event updated via put": event});
    });
});

router.patch('/api/events/:id', function(req, res, next) {
    
    Event.findById({_id: req.params.id}, function(err, event) {
        if (err) { 
            res.status(500).json({"message": "patch failed"});
            return next(err); }
        if (event == null) {
            return res.status(404).json({"message": "Event not found"});
        }
        event.name = (req.body.name || event.name);
        event.event_id = (req.body.event_id || event.event_id);
        event.save();
        res.status(200).json({"event updated via patch": event});
    });
});

module.exports = router;
