var express = require('express');
var router = express.Router();

router.post('/api/users', function(req, res, next){
    var user = {
        "_id": 0,
        "name": "insertName",
        "password": "password"
    }
    res.status(201).json(user);
});

module.exports = router;