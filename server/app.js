var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var path = require('path');
var cors = require('cors');
var history = require('connect-history-api-fallback');

var usersController = require('./controllers/users');
var announcementsController = require('./controllers/announcements');
var eventsController = require('./controllers/events');
var clubsController = require('./controllers/clubs');

// Connect for deploy

const { MongoClient } = require('mongodb');
const mongoURI = "mongodb+srv://gianmarco_iachella:sembookdbpw@clusterbuster.vxc97.mongodb.net/sembookdb?retryWrites=true";
//These below are not necessary due to them being run at "Connect to MongoDB" below
/*const mongoClient = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
 mongoClient.connect(err => {
  const collection = mongoClient.db("test").collection("devices");
  // perform actions on the collection object
  mongoClient.close();
}); */

// Variables
//This below is not necessary due to it being set at "Connect for deploy" above
//var mongoURI = process.env.MONGODB_URI  || 'mongodb://localhost:27017/SEMbookDB';
var port = process.env.PORT || 3001;



// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) {
        console.error(`Failed to connect to MongoDB with URI: ${mongoURI}`);
        console.error(err.stack);
        process.exit(1);
    }
    console.log(`Connected to MongoDB with URI: ${mongoURI}`);
});

// Create Express app
var app = express();
// Parse requests of content-type 'application/json'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// HTTP request logger
app.use(morgan('dev'));
// Enable cross-origin resource sharing for frontend must be registered before api
app.options('*', cors());
app.use(cors());

// Import routes
app.get('/api', function(req, res) {
    res.json({'message': 'Welcome to your DIT341 backend ExpressJS project!'});
});

app.use(usersController);

app.use(announcementsController);

app.use(eventsController);

app.use(clubsController);

// Catch all non-error handler for api (i.e., 404 Not Found)
app.use('/api/*', function (req, res) {
    res.status(404).json({ 'message': 'Not Found' });
});


// Configuration for serving frontend in production mode
// Support Vuejs HTML 5 history mode
app.use(history());
// Serve static assets
var root = path.normalize(__dirname + '/..');
var client = path.join(root, 'client', 'dist');
app.use(express.static(client));

// Error handler (i.e., when exception is thrown) must be registered last
var env = app.get('env');
// eslint-disable-next-line no-unused-vars
app.use(function(err, req, res, next) {
    console.error(err.stack);
    var err_res = {
        'message': err.message,
        'error': {}
    };
    if (env === 'development') {
        // Return sensitive stack trace only in dev mode
        err_res['error'] = err.stack;
    }
    res.status(err.status || 500);
    res.json(err_res);
});

app.listen(port, function(err) {
    if (err) throw err;
    console.log(`Express server listening on port ${port}, in ${env} mode`);
    console.log(`Backend: http://localhost:${port}/api/`);
    console.log(`Frontend (production): http://localhost:${port}/`);
});

module.exports = app;
