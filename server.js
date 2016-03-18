var express = require('express'),
    logger = require('morgan')('dev'),
    server = express();
//Static assets such as HTML, JavaScript, CSS
server.use(express.static(__dirname+'/public'));
//Setup logging
server.use(logger);

server.get('/', function(req, res) {
  res.sendFile('public/html/index.html', {root: __dirname});
});

server.get('/cover', function(req, res) {
  res.sendFile('public/html/cover.html', {root: __dirname});
});

server.listen(8080, function() {
  console.log('Now listening on port 8080');
});
