var http = require('http');
var express = require("express");
var app = express(); 
var port = 1337;
var controllers = require("./controllers");


app.use(express.static(__dirname + "/public"));
app.set("view engine", "vash");

controllers.init(app);



app.get("/api/users", function (req, res) {
	res.set("Content-Type", "application/json");
	res.send({name: "Alan", isValid: true, group: "Admin", id: 123});
})

var server = http.createServer(app);
server.listen(port);