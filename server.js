var express = require('express'),
    bodyParser= require('body-parser'),
    logger = require('morgan')('dev'),
    Flickr = require('node-flickr'),
    apiKeys  =  require('./config/config.js'),
    server = express();
//exports

var port = process.env.port || 3000;

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

server.get('/about', function(req, res) {
  res.sendFile('public/html/about.html', {root: __dirname});
});
//http post for search by tags

server.post('/api/photos', function(req, res){
    console.log(req.body )

   flickr.get('photos.search',{"tags": req.body.terms}, function(err, result){
      if (err) return console.error(err);
      res.json(result);
   });

});

//http post for serch on image click for image info

server.post('/api/photos/camera/:id', function(req, res){
     console.log(req.params.id);
  flickr.get('photos.getExif',{"photo_id" : req.params.id}, function(err, result){
        if (err) return console.error(err);
        res.json(result);

  });
});
//http post for individual photo
server.post('/api/photos/xinfo:id', function(req, res){


   flickr.get('photos.getSizes',{"photo_id": req.params.id}, function(err, result){
      if (err) return console.error(err);
      res.json(result);
   });

});


server.listen(port, function() {
  console.log('Now listening on port 8080');
});
