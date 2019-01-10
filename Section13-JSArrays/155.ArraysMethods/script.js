var countries = ["England", "Scotland", "Wales"];

// Pop and push
console.log("Countries " + countries);
countries.push("Northern Ireland");
console.log("Countries " + countries);
console.log("Countries " + countries.pop());
console.log("Countries " + countries);

// Shift and Unshift
// Shift = remove first element of the array
// Unshift = add item to the front of the list
countries.unshift("France");
console.log("Countries " + countries);
console.log("Countries " + countries.shift());
console.log("Countries " + countries);

// IndexOf
console.log("countries.IndexOf('Wales') " + countries.indexOf("Wales"));

// Slice
var CountriesCopy = countries.slice(0,2);
console.log("CountriesCopy " + CountriesCopy);