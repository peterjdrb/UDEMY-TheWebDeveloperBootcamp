console.log("Print All numbers between -10 and 19");
for (num=-10; num <= 19; num++){
	console.log(num);
}

console.log("Print All even numbers between 10 and 40");
for (num=10; num <= 40; num+=1){
	if (num % 2 === 0){
		console.log(num);
	}

console.log("Print All odd numbers between 300 and 333");
for (num=300; num <= 333; num++){
	if (num % 2 === 1){
		console.log(num);
	}
}

console.log("Print All numbers divisable by 5 AND 3 between 5 and 50");
for (num=5; num <= 50; num++){
	if (num % 5 === 0 && num % 3 === 0 ){
		console.log(num);
	}
}