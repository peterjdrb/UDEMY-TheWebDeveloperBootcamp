var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var campGrounds = [
    {name:"Salman Creek", image:"https://images.unsplash.com/photo-1524293581917-878a6d017c71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},
    {name:"Granite Hill", image:"https://images.unsplash.com/photo-1515861461225-1488dfdaf0a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},
    {name:"Mountain Goat's Rest", image:"https://images.unsplash.com/photo-1526958977630-bc61b30a2009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}
];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

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