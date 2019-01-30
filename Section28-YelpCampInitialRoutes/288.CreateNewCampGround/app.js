var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var campGrounds = [
    {name:"Salman Creek", image:"https://images.unsplash.com/photo-1546156751-a5bcca6b999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"},
    {name:"Granite Hill", image:"https://images.unsplash.com/photo-1547195072-65d33400f09b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"},
    {name:"Mountain Goat's Rest", image:"https://images.unsplash.com/photo-1545486605-03e5369766bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"},
];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("landing");
});

app.get("/campGrounds", function(req, res) {
    res.render("campGrounds", {campGrounds:campGrounds});
});

app.get("/campGrounds/new", function(req, res) {
    res.render("new"); 
});

app.post("/campGrounds", function(req,res){
    var name = req.body.name;
    var imageUrl = req.body.imgUrl;
    
    var newCampground = {name:name, image:imageUrl};
    campGrounds.push(newCampground);
    
    res.redirect("/campGrounds");
});

app.get("*", function(req, res){
   res.send("Page not found!") ;
});

app.listen(3000, function(){
    console.log('localhost:3000/');
});