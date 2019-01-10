var age = Number(prompt("what is your age in years?"));

if (age <= 0) {
	alert("You must be atleast 1 year old.");
}

if (age === 21) {
	alert("Happy 21st Birthday!!");
}

if (age%2 === 1) {
	alert("your age is odd!");
}

if ((Math.sqrt(age))%1 === 0) {
	alert("perfect square!");
}