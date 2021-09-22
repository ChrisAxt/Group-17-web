var express = require('express');
const { Mongoose } = require('mongoose');
var router = express.Router();
var Schedule = require('../models/schedule');

router.post('/api/schedules', function (req, res, next) {
    
    var schedule = new Schedule(req.body);
    schedule.save(function (err) {
        if (err) { return next(err); }
        res.status(201).json(schedule);
    });
});

router.get('/api/schedules', function (req, res, next){

    Schedule.find(function(err, schedules){
        if (err) { return next(err); }
        return res.status(200).json({"schedules": schedules});
    });
});

router.delete('/api/schedules', function (req, res, next){

    Schedule.deleteMany(function(err, schedules){
        if (err) { return next(err); }
        //TODO: change res message
        return res.status(202).json({"schedules": schedules});
    });
});

router.get('/api/schedules/:id', function (req, res, next){
    
    var id = req.params.id;
     
    Schedule.find({_id: id}, function(err, schedule){
        if (err) { return next(err); }
        if (schedule == null) {
            return res.status(404).json({"message": "Schedule not found"});
        }
        
        var returnedUser = schedule;
        return res.status(200).json(returnedUser);
    })
})

//put and patch

router.delete('/api/schedules/:id', function(req, res, next) {
    
    var id = req.params.id;
    
    Schedule.findOneAndDelete({_id: id}, function(err, schedule) {
        if (err) { return next(err); }
        if (schedule == null) {
            return res.status(404).json({"message": "Schedule not found"});
        }
        return res.status(202).json(schedule);
    });
});

module.exports = router;
