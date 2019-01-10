console.log("Print All numbers between -10 and 19");
var num1 = Number(-10);
while (num1 <= 19) {
	console.log(num1);
	num1++;
};

console.log("Print All even numbers between 10 and 40");
var num2 = Number(10);
while (num2 <= 40) {
	if (num2 % 2 === 0){
		console.log(num2);
	}
	num2++;
};

console.log("Print All odd numbers between 300 and 333");
var num3 = Number(300);
while (num3 <= 333) {
	if (num3 % 2 === 1){
		console.log(num3);
	}
	num3++;
};

console.log("Print All numbers divisable by 5 AND 3 between 5 and 50");
var num4 = Number(5);
while (num4 <= 50) {
	if (num4 % 5 === 0 && num4 % 3 === 0 ){
		console.log(num4);
	}
	num4++;
}