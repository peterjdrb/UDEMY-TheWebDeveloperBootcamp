var request = require("request");
var bodyParser = require("body-parser");

request("https://jsonplaceholder.typicode.com/posts?userId=1", function(error, response, body){
   if(!error && response.statusCode === 200) {
       var parsedData = JSON.parse(body);
       parsedData.forEach(function(post) {
          console.log("Title: " + post.title);
          console.log("Post: " + post.body.replace(/(\r\n|\n|\r)/gm, " "));
          console.log("************************************************************");
       });
       
   } else {
       console.log(error);
   }
});