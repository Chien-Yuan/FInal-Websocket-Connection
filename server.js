var express = require('express');

var app = express();
var server = app.listen(4000);

app.use(express.static('Public'));

console.log("my socket server is running");

var socket = require('socket.io');

var io = socket(server);




io.sockets.on('connection',newConnection);

function newConnection(socket){
console.log('new connection: ' + socket.id);

socket.on('mouse', mouseMsg);

function mouseMsg(data){
    console.log(data);
    //io.sockets.emit('mouse',data);
    socket.broadcast.emit('mouse',data);
    var message = {
        address: "/mouse",
        args: [
            {type: "f", value: data.x},
            {type: "f", value: data.y}
        ]
    };
    
}
}


