var express = require('express'),
    bodyParser= require('body-parser'),
    logger = require('morgan')('dev'),
    Flickr = require('node-flickr'),
    apiKeys  =  require('./config/config.js'),
    server = express();
//exports



flickr = new Flickr(apiKeys);


//Static assets such as HTML, JavaScript, CSS
server.use(express.static(__dirname+'/public'));
//middleware
server.use( bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

//Setup logging
server.use(logger);

//get for home page
server.get('/', function(req, res) {
  res.sendFile('public/html/index.html', {root: __dirname});
});

//get for the goat
server.get('/cover', function(req, res) {
  res.sendFile('public/html/cover.html', {root: __dirname});
});

//post for search

server.post('/api/photos', function(req, res){
    console.log(req.body )
   flickr.get('photos.search',{"tags": req.body.terms}, function(err, result){
      if (err) return console.error(err);
      res.json(result);
   });

});

server.listen(8080, function() {
  console.log('Now listening on port 8080');
});
