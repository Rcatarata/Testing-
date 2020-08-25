var css = document.querySelector("h3");
var color1 =document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
		body.style.background = 
	// this must be in the same syntax order or nothing will happen
	"linear-gradient(to right, "   
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";"; 
}

color1.addEventListener("input", setGradient);
	
color2.addEventListener("input", setGradient);