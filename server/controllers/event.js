var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Event = require.model('../model/event');
const event = require('../model/event');


router.post('/api/event', function(req, res, next){
    var newEvent = new Event(req.body);
    
    newEvent.save(function(err,newEvent){
        if (err){return next(err);}
        res.status(201).json(newEvent);
    });
})
// this one shows all the created events//

router.get('/api/event', function(req, res, next){

    Event.find( function(err, event){
        if (err) {return next(err)};
        res.status(200).json({'event' : event});
    });
});

// this one shows all the events made, shown by specific id//
 
router.get('/api/event/:id', function(req, res, next){
    Event.find(function(err, event){
        if (err) {return next(err)};
        if (event == null){
            return res.status(404).json({
                "message" : "event with ID not found"
            });
        }
    })
})


// This one deletes the event with specific ID//.

router.delete('/api/event/:id', function(req, res, next){

    var id = req.params.id;

    Event.findOneAndDelete({"_id" : id}, function(err, event){
        if (err) {return next(err)}
        if (event == null) {
            return res.status(404).json({'message' : 'Event not found'})
        }
        res.status(200).json(event);
    });
});

// This one makes it possible to update the event with specific id.
 //Allows updating several attributes.//

 router.patch('/api/event/:id', function(req, res, next){
    Event.findById(function(err, event){
        if(err){return next(err)};
        res.json({"event":event});
        if (event == null){
            return res.status(404).json({
                "message" : "event not found"
            });
        }
    })
        event.location = (req.body.location||event.location);
        event.time = (req.body.time||event.time);
        event.description = (req.body.description||event.description);
        event.save();
})

module.exports = router;