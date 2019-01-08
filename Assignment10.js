//alert("Conected");
var bgcolv = false;

var bgcol = document.querySelector("button"); //This works, meaning the issue is how you wrote your function. 

bgcol.addEventListener("click", function(){
	if(bgcolv){
		document.body.style.background = "white"; // This is a better way of selecting/reseting variables.
	 	bgcolv = false; //You can not use the != here due to the boolean aspect. Instead it would be bgcolv = !bgcolv, and it would go after the if statement
	}
	 else{
		document.body.style.background = "purple";
	 	bgcolv = true;
	}
});
//Honestly, your logic made sense, but your syntax was a wreck.
// You can also use a purple style class and rather than an if statement, toggle it within the event listener. 
