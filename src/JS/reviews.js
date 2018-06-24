
let number = 0;

setInterval(function(){
	number++
	var block = document.getElementById('changing');
	block.classList.remove(`review5`);
	block.classList.add(`review${number}`);
	block.classList.remove(`review${number -1}`);
	
	if(number >= 5) number = 0;
}, 5000);


function formSubmit(){
	var nL = document.querySelectorAll(".normalInput");
	let data = Array.from(nL)
	var newD = data.map(line => line.value);
	console.log(`Name: ${newD[0]}. Message: ${newD[3]} Phone Number: ${newD[1]} Email: ${newD[2]}`)
}


