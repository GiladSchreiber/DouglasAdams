

$("#firstPlanet").click(function(){
	$("input[type='text']").fadeToggle();
		$("body,html").animate(
	        {
	            scrollTop : 970                      // Scroll 500px from top of body
	        }, 400); 
})

$("#secPlanet").click(function(){
	$("input[type='text']").fadeToggle();
		$("body,html").animate(
	        {
	            scrollTop : 1500                      // Scroll 500px from top of body
	        }, 400); 
})

$("#thirdPlanet").click(function(){
	$("input[type='text']").fadeToggle();
		$("body,html").animate(
	        {
	            scrollTop : 2000                      // Scroll 500px from top of body
	        }, 400); 
})

function revealFirst(){
 	document.getElementById("techQuote").classList.add('text-white');
 	document.getElementById("techQuote").classList.add('fadeIn');
 	document.getElementById("techQuote").classList.remove('text-black');           
};

function revealSec(){
 	document.getElementById("religionQuote").classList.add('text-white');
 	document.getElementById("religionQuote").classList.add('fadeIn');
 	document.getElementById("religionQuote").classList.remove('text-black');           
};

function revealVid(){
	document.getElementById("vid").classList.remove('transparent');           
 	document.getElementById("vid").classList.add('fadeIn');
};

function revealEnd(){
 	document.getElementById("endQuote").classList.add('text-white');
 	document.getElementById("endQuote").classList.add('fadeIn');
 	document.getElementById("endQuote").classList.remove('text-black');           
};


$(window).scroll(function (event) {
	var firstBar = 500;
	var secBar = 1200;
	var thirdBar = 1700;
    var scroll = $(window).scrollTop();
    if((scroll > firstBar) && (scroll < secBar)){
    	document.getElementById("firstPlanet").classList.add('shineStar');
 		document.getElementById("firstPlanet").classList.remove('darkStar');
 		 document.getElementById("secPlanet").classList.remove('shineStar');
 		document.getElementById("thirdPlanet").classList.remove('shineStar');
 		 document.getElementById("secPlanet").classList.add('darkStar');
 		document.getElementById("thirdPlanet").classList.add('darkStar');

    } else if ((scroll >= secBar) && (scroll < thirdBar)) {
    	document.getElementById("secPlanet").classList.add('shineStar');
 		document.getElementById("secPlanet").classList.remove('darkStar');
 		 document.getElementById("firstPlanet").classList.remove('shineStar');
 		document.getElementById("thirdPlanet").classList.remove('shineStar');
 		 		 document.getElementById("firstPlanet").classList.add('darkStar');
 		document.getElementById("thirdPlanet").classList.add('darkStar');
    } else if (scroll >= thirdBar) {
    	document.getElementById("thirdPlanet").classList.add('shineStar');
 		document.getElementById("thirdPlanet").classList.remove('darkStar');
 		 document.getElementById("firstPlanet").classList.remove('shineStar');
 		document.getElementById("secPlanet").classList.remove('shineStar');
 		 		 document.getElementById("firstPlanet").classList.add('darkStar');
 		document.getElementById("secPlanet").classList.add('darkStar');
    } else {
    	document.getElementById("thirdPlanet").classList.add('darkStar');
 		document.getElementById("thirdPlanet").classList.remove('shineStar');
 		 document.getElementById("firstPlanet").classList.remove('shineStar');
 		document.getElementById("secPlanet").classList.remove('shineStar');
 		 		 document.getElementById("firstPlanet").classList.add('darkStar');
 		document.getElementById("secPlanet").classList.add('darkStar');
    }
});

// $(window).scroll(function (event) {
// 	var menuBar = 300;
//     var scroll = $(window).scrollTop();
//     if((scroll > menuBar){
// 		document.getElementById("verticalNevBar").classList.add('sticky');

//     } 
// });

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("verticalNevBar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.remove("verticalNevBar");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("verticalNevBar");
  }
}