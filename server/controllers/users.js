var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.post('/api/users', function (req, res, next) {
    var user = new User(req.body);
    user.save(function (err) {
        if (err) { return next(err); }
        res.status(201).json(user);
    });
});

 router.delete('/api/users/:user_Id', function(req, res, next){
    
    
    collection("users").deleteOne(user_id, function(err, obj) {
      if (err) throw err;
      console.log("1 user deleted");
      db.close();
    }); 
    
}) 


module.exports = router;
