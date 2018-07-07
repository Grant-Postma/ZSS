


setInterval(function(){
	number++
	var block = document.getElementById('changing');
	block.classList.remove(`review5`);
	block.classList.add(`review${number}`);
	block.classList.remove(`review${number -1}`);
	
	if(number >= 5) number = 0;
}, 5000);


var inputSummoner = document.getElementById("dInput");

inputSummoner.addEventListener("keyup", function (event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click

 
    location.href=`http://maps.google.com/maps?saddr=”${dInput.value}”&daddr=”231 N Centennial St, Zeeland, MI 49464”`

    }
});


function formSubmit(){
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



setTimeout(function(){
	$('#talkP, #letsTalk, #flex-words p, .box1, #flex-words h1, #flex-words h2').css({'opacity': '1','transform': 'translateX(0px)'})
	$('#color').css({'transform': 'translateY(0px)'})
}, 0);


setTimeout(function(){
	$(' #find-us, form, .text-align, #flex-words a').css({'opacity': '1','transform': 'translateX(0px)'})

setTimeout(function () {
	$(' #find-us, form, .text-align, .vehicle-box').css({ 'opacity': '1', 'transform': 'translateX(0px)' })

}, 300);
//home page unti sizing

setTimeout(function(){
	$('#unit1').css({'transform': 'translateY(0px)'})
}, 0);

setTimeout(function(){
	$('#unit2').css({'transform': 'translateY(0px)'})
}, 200);

setTimeout(function(){
	$('#unit3').css({'transform': 'translateY(0px)'})
}, 400);

setTimeout(function(){
	$('.contact-dividor').css({'opacity': '1'})
}, 500);


function changeStuff(event) {
	var pageWidth = $(window).width();
	$(".sizeBody").removeClass("active");
	$('#sizeHead div').removeClass("on");
	$(`#n${event.path[0].id}`).addClass("active");
	$(`#${event.path[0].id}`).addClass("on");
	var size = document.getElementsByClassName('on')[0].innerHTML;
	$('.dropbtn').html(`Unit Sizes - ${size}`)
	if (pageWidth < 768) {

	$('#sizeHead').css('display', 'none')
		}

}


const headNames = document.querySelectorAll('#sizeHead div');
headNames.forEach(name => name.addEventListener('click', changeStuff));


function expand() {
	$('#sizeHead').toggle();
}

var size = document.getElementsByClassName('on').a.innerHTML;



