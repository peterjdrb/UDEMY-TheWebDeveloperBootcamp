var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res){
    res.render("home");
});

app.get("/fallInLove/:thing", function(req, res) {
    var thing = req.params.thing; 
    res.render("love", {thingVar:thing});
});

app.get("/posts", function(req, res) {
   var posts = [
                {title:"Post 1", author:"Albert"},
                {title:"Post 2", author:"Bert"},
                {title:"Post 3", author:"Charles"}
       ];
    res.render("posts", {postsEJS:posts});
});

app.get("*", function (req, res){
    res.send("Page not found :(");
});

app.listen(3000, function(){
    console.log('localhost:3000/');
});