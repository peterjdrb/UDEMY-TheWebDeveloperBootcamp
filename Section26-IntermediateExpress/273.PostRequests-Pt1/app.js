var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home"); 
});

app.get("/friends", function(req, res) {
    var friends = ["Albert", "Bert", "Charles"];
    res.render("friends", {friends:friends}); 
});

app.post("/addFriend", function(req, res){
    res.send("You have a new friend!");
});

app.get("*", function(req, res){
    res.send("Page not found :(");
});

app.listen(3000, function(){
    console.log('localhost:3000/');
});