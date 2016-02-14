var express = require('express');
var app = express();
var http = require('http').Server(app);

//Lets define a port we want to listen to
var PORT = 8080;

//Lets define the dir we serve from
var dirname = "/public";

//We need a function which handles requests and send response
function handleRequest(request, response) {
    response.sendFile('index.html', { root: __dirname + dirname});
}

app.get('/', handleRequest);
app.use(express.static(__dirname));

//Lets start our server
http.listen(PORT, function() {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
