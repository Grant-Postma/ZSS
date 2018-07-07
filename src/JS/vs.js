

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
	$(' #find-us, form, .text-align').css({ 'opacity': '1', 'transform': 'translateX(0px)' })
}, 300);




function vehicleFn(event){
	var pageWidth = $(window).width();
	 var tab = event.path[1].id;
	 console.log(tab);
	 if(tab != 1 && tab != 2 && tab != 3 && tab != 4 ) tab = event.path[0].id;
	 $('.vehicle-options div').removeClass("active");
	 $(`#${tab}`).addClass("active");
	 $('.vehicle-sizes div').removeClass("non-applicable");

	 if(tab == 1 ){
		$(`#vs1`).addClass("non-applicable"); 
		$(`.vd-type`).html("Motorcycle Storage");
		$(`.vd-description`).html("All brands and sizes of motorcycle will fit in 10x10+. Some smaller motorcycles may fit in a 5x5")
	 }
	 
	 if(tab == 2 ){
		$(`#vs1`).addClass("non-applicable"); 
		$(`#vs2`).addClass("non-applicable");
		$(`#vs3`).addClass("non-applicable");
		$(`.vd-type`).html("Automobile Storage");
		$(`.vd-description`).html("The height restriction on all units excluding 15x45+ is 10'.")
	 }

	 if(tab == 3 ){
		$(`#vs1`).addClass("non-applicable"); 
		$(`#vs2`).addClass("non-applicable");
		$(`#vs3`).addClass("non-applicable");
		$(`#vs4`).addClass("non-applicable");
		$(`#vs5`).addClass("non-applicable");
		$(`.vd-type`).html("Storing Two Automobiles");
		$(`.vd-description`).html("The height restriction on all units excluding 15x45+ is 10'.")
	 }

	 if(tab == 4 ){
		$(`#vs1`).addClass("non-applicable"); 
		$(`#vs2`).addClass("non-applicable");
		$(`#vs3`).addClass("non-applicable");
		$(`#vs4`).addClass("non-applicable");
		$(`#vs5`).addClass("non-applicable");
		$(`#vs6`).addClass("non-applicable");
		$(`#vs7`).addClass("non-applicable");
		$(`#vs8`).addClass("non-applicable");
		$(`#vs9`).addClass("non-applicable");
		$(`#vs10`).addClass("non-applicable");
		$(`.vd-type`).html("Storing Two Automobiles");
		$(`.vd-description`).html("These Units Range wildly in size so they should be able to fit boats of all sizes. These units are limited in number.")
	 }
}

console.log("fsdfasdf");
const vehicleTabs = document.querySelectorAll('.vehicle-options div');
console.log(vehicleTabs);
vehicleTabs.forEach(type => type.addEventListener('click', vehicleFn));

function expand() {
	$('#sizeHead').toggle();
}

