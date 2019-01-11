var p1 = document.getElementsByTagName("p")[0];
console.log(p1.innerHTML);

setTimeout(function(){
    p1.innerHTML = "Corgi mixes are <strong>really really super</strong> adorable";
	console.log(document.body.textContent);
}, 2000);

setInterval (function(){
	p1.classList.toggle("big");
}, 5000);