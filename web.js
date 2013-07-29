var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
	var data = fs.readFileSync('index.html');
	var buffer = new Buffer(data);
	response.send(buffer.toString());		
  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});