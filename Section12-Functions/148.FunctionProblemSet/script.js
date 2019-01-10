function isEven (num) {
	return num%2===0;
}

function factorial (num) {
	var returnResult = Number(1);

	for (num; num >=2; num--) {
		returnResult = returnResult * num;
	}

	return returnResult;
}

function kebabToSnake (inputString) {
	var returnString = new String();

	for (i=0; i<inputString.length; i++) {
		if (inputString[i] === "-") {
			returnString = returnString + "_";
		} else {
			returnString = returnString + inputString[i];
		}
	}

	return returnString;
}

console.log("isEven");
console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));


console.log("factorial");
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

console.log("kebabToSnake");
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));