var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("<h1>Hi There!</h1>");
});

app.get("/bye", function(req, res){
    res.send("<h1>Bye!</h1>");
});

app.get("/dogs", function(req, res){
    res.send("<h1>WOOF!</h1>");
});

app.listen(3000, function(){
    console.log(process.env.PORT);
    console.log(process.env.IP);
});