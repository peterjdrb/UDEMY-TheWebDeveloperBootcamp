var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig:"Oink",
        cow: "Moo",
        dog:"Woof Woof!",
        cat: "MEOW!"
    };
    
    var sound = sounds[animal];
    if (sound === undefined) {
        res.send("I don't know what sound a  " + animal + " makes!");
    } else {
        res.send("The " + animal + " says '" + sound + "'");
    }
});

app.get("/repeat/:word/:number", function(req, res){
   var word = req.params.word;
   var number = parseInt(req.params.number, 10);
   var output = "";
   for (var i = 0; i<number; i++){
       output = output + word + " ";
   }
   
   res.send(output);
});

app.get("*", function(req, res){
   res.send("Sorry page not found...What are you doing with your life?"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('https://udemy-peterjdrb.c9users.io/');
});