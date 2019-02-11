const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//add a new cat
var newCat = new Cat({
    name: "Mrs Norris",
    age: 7,
    temperament: "Evil"
});

newCat.save(function(err, cat){
    if(err){
        console.log("Something went wrong");
    } else {
        console.log("Cat saved!");
        console.log(cat);
    }
})

//retrieve cat from database
Cat.find({}, function(err, cats){
    if(err) {
        console.log("Error trying to find cat!");
        console.log(err);
    } else {
        console.log("Cat(s) were found in the database!")
        console.log(cats);
    }
})