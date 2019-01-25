var request = require("request");
request("http://www.google.co.uk", function(error, response, body){
   if(!error && response.statusCode === 200) {
       console.log(body);
   } else {
       console.log(error);
   }
});