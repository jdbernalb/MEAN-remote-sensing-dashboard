// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var Nodes     = require('./models/Mednode');
var mongoose   = require('mongoose/');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var port = process.env.PORT || 8080;        // set our port

//connect to local mongodb database
var db = mongoose.connect('mongodb://jd.bernal:123456@ds131890.mlab.com:31890/prueba_embebidos');
//var db = mongoose.connect('mongodb://127.0.0.1:27017/main-street');
//attach lister to connected event
mongoose.connection.once('connected', function() {
	console.log("Connected to database")
});


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here
router.route('/nodes')

    // create a Street (accessed at POST http://localhost:8080/api/streets)
    .post(function(req, res) {
        
        var node = new Nodes();      // create a new instance of the Bear model
        node.Date = req.body.Date;  // set the bears name (comes from the request)

        // save the node and check for errors
        node.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Med created!' });
        });
        
    })

    .get(function(req, res) {
        var search = req.query.dates;
        Nodes.find().sort({"Sensores.date":1}).exec(function(err, nodes) {
            if (err)
                res.send(err);     
            res.json(nodes);
        });
    });

router.route('/datequery')
        .get(function(req, res) {
        var search = req.query.dates;
        Nodes.find({"Sensores.date" : {"$gte":ISODate(req.query.dates.q1),"$lt":ISODate(req.query.dates.q2)}}).exec(function(err, nodes){ 
            if (err)
                res.send(err);     
            res.json(nodes);
        });
    });
router.route('/nodes/:id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/streets/:street_name)
    .get(function(req, res) {
        console.log('id: ' + req.params.id);
        Nodes.findById(req.params.id, function(err, node){
            if (err)
                res.send(err);
            res.json(node);
        });
    });

router.route('/last')

    // get the bear with that id (accessed at GET http://localhost:8080/api/streets/:street_name)
    .get(function(req, res) {
       
        Nodes.find().limit(1).sort({"Sensores.date":-1}).exec(function(err, value){
            if (err)
                res.send(err);
            res.json(value);
        });
    });

router.route('/dashboard')

    // get the bear with that id (accessed at GET http://localhost:8080/api/streets/:street_name)
    .get(function(req, res) {
       
        Nodes.aggregate({$group:{_id:null,avgTemp:{$avg:"$Sensores.Temp"},minTemp:{$min:"$Sensores.Temp"},maxTemp:{$max:"$Sensores.Temp"},avgHum:{$avg:"$Sensores.Hum"},minHum:{$min:"$Sensores.Hum"},maxHum:{$max:"$Sensores.Hum"},avgPres:{$avg:"$Sensores.Pres"},minPres:{$min:"$Sensores.Pres"},maxPres:{$max:"$Sensores.Pres"},avgHumT:{$avg:"$Sensores.HumT"},minHumT:{$min:"$Sensores.HumT"},maxHumT:{$max:"$Sensores.HumT"}}}).exec(function(err, value){
            if (err)
                res.send(err);
            res.json(value);
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);