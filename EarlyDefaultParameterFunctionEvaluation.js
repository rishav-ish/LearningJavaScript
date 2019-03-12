"use strict"

function showMessage(from,text){
	text = text || "oops it's look like you have not provided message";

	console.log(from,text);
}

showMessage("Rishav","loves Ishita");
showMessage("forget");