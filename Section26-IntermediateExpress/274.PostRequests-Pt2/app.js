var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var friends = ["Albert", "Bert", "Charles"];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home"); 
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends:friends}); 
});

app.post("/addFriend", function(req, res){
    var newFriend = req.body.newFriendName;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("*", function(req, res){
    res.send("Page not found :(");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('https://udemy-peterjdrb.c9users.io/');
});