const express = require("express");

const app = express();
const port = 7000;
const url = "http://localhost:"

const paths = "paths = [<br><br>"
			  +"		"+url+port+"/accounts/user<br>"
			  +"		"+url+port+"/driver/:name<br>"
			  +"<br><br>]";



app.get('/', 
	function(request, response){
		response.send(paths);
	}
);


app.get('/accounts/user',
	function(request, response){
		response.send("Hello, user!")
	}

);

app.get('/driver/:name',
	function(request, response){
		response.send("Hello driver "+request.params.name+"!")
	}

);


app.get('/example/html',
	function(request, response){
		response.sendFile(__dirname+"/templates/index.html")
	}

);



app.listen(port, 
	function(){
		console.log("server running in "+url+port.toString())
	}
);