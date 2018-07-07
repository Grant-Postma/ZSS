

function formSubmit() {
	var nL = document.querySelectorAll(".normalInput");
	let data = Array.from(nL)
	var newD = data.map(line => line.value);
	console.log(`Name: ${newD[0]}. Message: ${newD[3]} Phone Number: ${newD[1]} Email: ${newD[2]}`)
}

function menu() {
	var menu = document.querySelector('#menushow');
	menu.style.height = '90vh';
	menu.style.width = '95%';
}

function off() {
	var menu = document.querySelector('#menushow');
	menu.style.height = '0px';
	menu.style.width = '0px';
}


setTimeout(function () {
	$('#talkP, #letsTalk, #flex-words p').css({ 'opacity': '1', 'transform': 'translateX(0px)' })
}, 100);

setTimeout(function () {
	$(' #find-us, form, .text-align, .vehicle-box').css({ 'opacity': '1', 'transform': 'translateX(0px)' })
}, 300);




function vehicleFn(event){
	// var pageWidth = $(window).width();
	 console.log(this);
	// $('#vehicle-options div').removeClass("active");
	// $('#vehicle-options div:nth-child(2)').addClass("active");
	// $(`#vs2`).addClass("non-applicable");
}

console.log("fsdfasdf");
const vehicleTabs = document.querySelectorAll('.vehicle-options div');
console.log(vehicleTabs);
vehicleTabs.forEach(type => type.addEventListener('click', vehicleFn));

function expand() {
	$('#sizeHead').toggle();
}

