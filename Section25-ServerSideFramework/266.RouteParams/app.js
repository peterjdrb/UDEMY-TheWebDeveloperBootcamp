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

app.get("/r/:subredditName", function(req, res) {
    res.send("you hit a sub reddit!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    console.log(req.params);
    res.send("you hit the comments of the " +  req.params.title + " post in the " + req.params.subredditName + " sub reddit.");
});


app.get("*", function(req, res){
    res.send("<h1>Page does not exists</h1>");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('https://udemy-peterjdrb.c9users.io/');
});