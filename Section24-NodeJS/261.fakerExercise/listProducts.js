var faker = require("faker")

console.log("==========================");
console.log("WELCOME TO MY SHOP!");
console.log("==========================");

var items = [];
for (var i = 0; i < 10; i++){
    items.push(
                {
                 productName:faker.commerce.productName(), 
                 price:faker.commerce.price(10, 250, undefined, "£")
                }
              );
}

items.forEach (function(item) {
    console.log(item.productName + " - " + item.price);
})