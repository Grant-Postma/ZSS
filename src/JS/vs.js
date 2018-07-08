

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
	$('#talkP, #letsTalk, #flex-words p, .box1, #flex-words h1, #flex-words h2').css({ 'opacity': '1', 'transform': 'translateX(0px)' })
	$('#color').css({ 'transform': 'translateY(0px)' })
}, 0);


setTimeout(function () {
	$(' #find-us, form, .text-align, #flex-words a').css({ 'opacity': '1', 'transform': 'translateX(0px)' })
}, 300);

setTimeout(function () {
	$('.vehicle-box, #contact').css({ 'opacity': '1', 'transform': 'translateY(0px)' })
}, 100);


//home page unti sizin



function vehicleFn(event) {
	var pageWidth = $(window).width();
	var tab;
	if (event.path) {
		tab = event.path[1].id;
		if (tab != 1 && tab != 2 && tab != 3 && tab != 4) tab = event.path[0].id;
	}
	else {
		tab = event.currentTarget.id;
	}

	console.log(tab);
	$('.vehicle-options div').removeClass("active");
	$(`#${tab}`).addClass("active");
	$('.vehicle-sizes div').removeClass("non-applicable");
	$('.vehicle-sizes div').removeClass("applicable");

	if (tab == 1) {
		$(`#vs1`).addClass("non-applicable");
		$(`#vs2`).addClass("applicable");
		$(`#vs3`).addClass("applicable");
		$(`#vs4`).addClass("applicable");
		$(`#vs5`).addClass("applicable");
		$(`#vs6`).addClass("applicable");
		$(`#vs7`).addClass("applicable");
		$(`#vs8`).addClass("applicable");
		$(`#vs9`).addClass("applicable");
		$(`#vs10`).addClass("applicable");
		$(`#vs11`).addClass("applicable");

		$(`.vd-type`).html("Motorcycle Storage");
		$(`.vd-description`).html("All sizes of motorcycle will fit in 10x10+. Some smaller motorcycles may fit in a 5x5")
	}

	if (tab == 2) {
		$(`#vs1`).addClass("non-applicable");
		$(`#vs2`).addClass("non-applicable");
		$(`#vs3`).addClass("non-applicable");
		$(`#vs4`).addClass("applicable");
		$(`#vs5`).addClass("applicable");
		$(`#vs6`).addClass("applicable");
		$(`#vs7`).addClass("applicable");
		$(`#vs8`).addClass("applicable");
		$(`#vs9`).addClass("applicable");
		$(`#vs10`).addClass("applicable");
		$(`#vs11`).addClass("applicable");
		$(`.vd-type`).html("Automobile Storage");
		$(`.vd-description`).html("The height restriction on all units excluding 15x45+ is 10'.")
	}

	if (tab == 3) {
		$(`#vs1`).addClass("non-applicable");
		$(`#vs2`).addClass("non-applicable");
		$(`#vs3`).addClass("non-applicable");
		$(`#vs4`).addClass("non-applicable");
		$(`#vs5`).addClass("non-applicable");
		$(`#vs6`).addClass("applicable");
		$(`#vs7`).addClass("applicable");
		$(`#vs8`).addClass("applicable");
		$(`#vs9`).addClass("applicable");
		$(`#vs10`).addClass("applicable");
		$(`#vs11`).addClass("applicable");
		$(`.vd-type`).html("Two Automobile Storage");
		$(`.vd-description`).html("The height restriction on all units excluding 15x45+ is 10'.")
	}

	if (tab == 4) {
		$(`#vs1`).addClass("non-applicable");
		$(`#vs2`).addClass("non-applicable");
		$(`#vs3`).addClass("non-applicable");
		$(`#vs4`).addClass("non-applicable");
		$(`#vs5`).addClass("non-applicable");
		$(`#vs6`).addClass("non-applicable");
		$(`#vs7`).addClass("non-applicable");
		$(`#vs8`).addClass("non-applicable");
		$(`#vs9`).addClass("non-applicable");
		$(`#vs10`).addClass("applicable");
		$(`#vs11`).addClass("applicable");
		$(`.vd-type`).html("Boat Storage");
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

