var firstName = prompt("Whit is your first name?");
var lastName = prompt("Whit is your last name?");
var age = prompt("What is your age?");
var fullName = firstName + " " + lastName;

console.log("Hello " + fullName + ".");

if (age > 1) {
	console.log("You are " + age + " years old.");
} else {
	console.log("You are " + age + " year old.");
};