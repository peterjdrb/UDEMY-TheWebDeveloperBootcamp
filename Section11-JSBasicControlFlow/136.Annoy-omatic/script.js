// V1
var input = new String();

while (input.toLowerCase() !== "yes" && input.toLowerCase() !== "yeah") {
	input = prompt("Are we there yet V1?");
}

alert("We made it!");


// V2
var inputV2 = new String();

// indexOf(string) === -1  means if the string doesn't exists
// therefore the line below means while neither exists then ask the question
while (inputV2.toLowerCase().indexOf("yes") === -1 && inputV2.toLowerCase().indexOf("yeah") === -1) {
	inputV2 = prompt("Are we there yet V2?");
}

alert("We made it!");