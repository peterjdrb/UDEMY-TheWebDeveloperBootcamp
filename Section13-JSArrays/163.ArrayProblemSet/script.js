function printReverse(arrayInput) {
	for (var i = arrayInput.length - 1; i >= 0; i--) {
		console.log(arrayInput[i]);
	}
}

function isUniform(arrayInput) {
	if (arrayInput.length === 0 || arrayInput.length === 1) {
		return true;
	}

	var uniform = true;
	var element = arrayInput[0];
	for (var i = 1; i < arrayInput.length; i++) {
		if (arrayInput[i] !== element) {
			uniform = false;
			break;
		}
	}

	return uniform;
}

function sumArray (arrayInput){
	var sumOfArray = 0;

	arrayInput.forEach(function(currentNum) {
		sumOfArray += currentNum;
	})

	return sumOfArray;
}

function max (arrayInput){
	var maxOfArray = arrayInput[0];

	for (i=1; i < arrayInput.length; i++) {
		if (arrayInput[i] > maxOfArray) {
			maxOfArray = arrayInput[i];
		}
	}

	return maxOfArray;
}

console.log("printReverse([1,2,3,4])");
printReverse([1,2,3,4]);
console.log('printReverse(["a", "b", "c"])');
printReverse(["a", "b", "c"]);

console.log('isUniform([1,1,1,1]) ' + isUniform([1,1,1,1]));
console.log('isUniform([2,1,1,1]) ' + isUniform([2,1,1,1]));
console.log('isUniform(["a", "b", "p"]) ' + isUniform(["a", "b", "p"]));
console.log('isUniform(["b", "b", "b"]) ' + isUniform(["b", "b", "b"]));

console.log("sumArray([1,2,3]) is " + sumArray([1,2,3]));
console.log("sumArray([10,3,10,4]) is " + sumArray([10,3,10,4]));
console.log("sumArray([-5,100]) is " + sumArray([-5,100]));

console.log("max([1,2,3]) is " + max([1,2,3]));
console.log("max([10,3,10,4]) is " + max([10,3,10,4]));
console.log("max([-5,100]) is " + max([-5,100]));