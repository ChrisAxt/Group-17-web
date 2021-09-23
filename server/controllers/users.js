var express = require('express');
const { Mongoose } = require('mongoose');
const { db } = require('../models/user');
var router = express.Router();
var User = require('../models/user');

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

//put and patch

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

module.exports = router;
