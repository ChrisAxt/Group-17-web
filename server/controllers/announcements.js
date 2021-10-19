var express = require('express');
const { Mongoose } = require('mongoose');
var router = express.Router();
var Announcement = require('../models/announcement');

router.post('/api/announcements', function (req, res, next) {
    
    var announcement = new Announcement(req.body);
    announcement.save(function (err) {
        if (err) { 
            res.status(400).json({"message": "post failed"});
            return next(err);
            }
        res.status(201).json(announcement);
    });
});

router.get('/api/announcements', function (req, res, next){

    Announcement.find(function(err, announcements){
        if (err) { 
            res.status(500).json({"message": "get failed"});
            return next(err);
        }
        if (announcements.length === 0 || announcements == null){
            return res.status(404).json({"message": "empty collection"});
        }
        res.status(200).json({"announcements": announcements});
    });

});

router.delete('/api/announcements', function (req, res, next){

    Announcement.find(function(err, announcements){
        if (err) { 
            res.status(500).json({"message": "get failed"});
            return next(err);
        }
        if (announcements.length === 0){
            return res.status(404).json({"message": "empty collection"});
        }
        Announcement.deleteMany(function(err, announcements){
            if (err) { 
                res.status(500).json({"message": "delete all failed"});
                return next(err); 
            }
            return res.status(202).json({"deleted announcements": announcements});
        });
    });    
});

router.get('/api/announcements/:id', function (req, res, next){
    
    Announcement.findById({_id: req.params.id}, function(err, announcement){
        if (err) { 
            res.status(500).json({"message": "get failed"});
            return next(err); 
        }
        if (announcement == null) {
            return res.status(404).json({"message": "announcement not found"});
        }
        res.status(200).json(announcement);
    });
});

router.delete('/api/announcements/:id', function(req, res, next) {
    
    Announcement.findOneAndDelete({_id: req.params.id}, function(err, announcement) {
        if (err) { 
            res.status(500).json({"message": "delete failed"});
            return next(err); }
        if (announcement == null) {
            return res.status(404).json({"message": "announcement not found"});
        }
        res.status(200).json({"announcement deleted": announcement});
    });
});

router.put('/api/announcements/:id', function(req, res, next) {

    Announcement.findById({_id: req.params.id}, function(err, announcement) {
        if (err) { 
            res.status(500).json({"message": "put failed"});
            return next(err); }
        if (announcement == null) {
            return res.status(404).json({"message": "announcement not found"});
        }
        announcement.title = req.body.title + " [Edited]";
        announcement.body = req.body.body + " [Edited]";
        announcement.save();
        res.status(200).json({"announcement updated via put": announcement});
    });
});

module.exports = router;
