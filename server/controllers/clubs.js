var express = require('express');
const { Mongoose } = require('mongoose');
var router = express.Router();
var Club = require('../models/club');

router.post('/api/clubs', function (req, res, next) {
    
    var club = new Club(req.body);
    Club.save(function (err) {
        if (err) { 
            res.status(400).json({"message": "post failed"});
            return next(err);
            }
        res.status(201).json(club);
    });
});

router.get('/api/clubs', function (req, res, next){

    Club.find(function(err, clubs){
        if (err) { 
            res.status(500).json({"message": "get failed"});
            return next(err);
        }
        if (clubs.length === 0 || clubs == null){
            return res.status(404).json({"message": "empty collection"});
        }
        res.status(200).json({"clubs": clubs});
    });

});

router.delete('/api/clubs', function (req, res, next){

    Clubs.find(function(err, clubs){
        if (err) { 
            res.status(500).json({"message": "get failed"});
            return next(err);
        }
        if (clubs.length === 0){
            return res.status(404).json({"message": "empty collection"});
        }
        Club.deleteMany(function(err, clubs){
            if (err) { 
                res.status(500).json({"message": "delete all failed"});
                return next(err); 
            }
            return res.status(202).json({"deleted clubs": clubs});
        });
    });    
});

router.get('/api/clubs/:id', function (req, res, next){
    
    Club.findById({_id: req.params.id}, function(err, club){
        if (err) { 
            res.status(500).json({"message": "get failed"});
            return next(err); 
        }
        if (club == null) {
            return res.status(404).json({"message": "club not found"});
        }
        res.status(200).json(club);
    });
});

router.delete('/api/clubs/:id', function(req, res, next) {
    
    Club.findOneAndDelete({_id: req.params.id}, function(err, club) {
        if (err) { 
            res.status(500).json({"message": "delete failed"});
            return next(err); }
        if (club == null) {
            return res.status(404).json({"message": "club not found"});
        }
        res.status(200).json({"club deleted": club});
    });
});

//put and patch

module.exports = router;
