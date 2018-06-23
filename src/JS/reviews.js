
let number = 0;

setInterval(function(){
	number++
	var block = document.getElementById('changing');
	block.classList.remove(`review5`);
	block.classList.add(`review${number}`);
	block.classList.remove(`review${number -1}`);
	
	if(number >= 5) number = 0;
}, 3000);

