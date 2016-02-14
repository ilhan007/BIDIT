var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Lets define a port we want to listen to
var PORT = 3000;

//Lets define the dir we serve from
var dirname = "/public";

//We need a function which handles requests and send response
function handleRequest(request, response) {
    response.sendFile('index.html', {
        root: __dirname + dirname
    });
}

app.get('/', handleRequest);
app.use(express.static(__dirname));

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('chat message', function(msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});


//Lets start our server
http.listen(PORT, function() {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
