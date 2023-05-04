var http = require('http');
var fs = require('fs');

var html = "";

fs.readFile('./index.html', 'utf8', (err, data) => {
  	if (err) {
    	html = data;
  	}else{
  		html = data;
  	}
});

			
http.createServer(
	function (req, res) {
		res.end(html);

	}
).listen(8080)

console.log("Server Running")