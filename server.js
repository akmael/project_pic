var express = require('express'),
    logger = require('morgan')('dev'),
    Flickr = require('node-flickr'),
    apiKeys  =  require('./config/config.js'),
    server = express();
//exports



flickr = new Flickr(apiKeys);


//Static assets such as HTML, JavaScript, CSS
server.use(express.static(__dirname+'/public'));
//Setup logging
server.use(logger);

//get for home page
server.get('/', function(req, res) {
  res.sendFile('public/html/index.html', {root: __dirname});
});


//get for test search
flickr.get('photos.search',{'tags':'cats,dogs'}, function(err, result){
    if (err) return console.error(err);
    console.log(result.photos);

});

server.listen(8080, function() {
  console.log('Now listening on port 8080');
});
