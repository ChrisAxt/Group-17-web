var express = require('express');
const { Mongoose } = require('mongoose');
var router = express.Router();
var Club = require('../models/club');

router.post('/api/clubs', function (req, res, next) {
    
    var club = new Club(req.body);
    Club.save(function (err) {
        if (err) { return next(err); }
        res.status(201).json(club);
    });
});

router.get('/api/clubs', function (req, res, next){

    Club.find(function(err, clubs){
        if (err) { return next(err); }
        return res.status(200).json({"clubs": clubs});
    });
});

router.delete('/api/clubs', function (req, res, next){

    Club.deleteMany(function(err, clubs){
        if (err) { return next(err); }
        //TODO: change res message
        return res.status(202).json({"clubs": clubs});
    });
});

router.get('/api/clubs/:id', function (req, res, next){
    
    var id = req.params.id;
     
    Club.find({_id: id}, function(err, club){
        if (err) { return next(err); }
        if (club == null) {
            return res.status(404).json({"message": "Club not found"});
        }
        
        return res.status(200).json(club);
    });
});

//put and patch

router.delete('/api/clubs/:id', function(req, res, next) {
    
    var id = req.params.id;
    
    Club.findOneAndDelete({_id: id}, function(err, Club) {
        if (err) { return next(err); }
        if (Club == null) {
            return res.status(404).json({"message": "Club not found"});
        }
        return res.status(202).json(Club);
    });
});

module.exports = router;
