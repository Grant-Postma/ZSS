
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

function menu(){
	var menu = document.querySelector('#menushow');
	menu.style.height = '90vh';
	menu.style.width = '95%';
}

function off(){
	var menu = document.querySelector('#menushow');
	menu.style.height = '0px';
	menu.style.width = '0px';
}


setTimeout(function(){
	$('#talkP, #letsTalk, #find-us, form').css({'opacity': '1','transform': 'translateX(0px)'})
}, 500);