var myRide;
var monthlyRide;
var cost;

function monthlyCard(){
	myRide = document.getElementById("rides").value;
	cost = 2.75
	monthlyRide = myRide * cost;
	alert("$" + monthlyRide + " is your monthly cost!");
	rightRide();
}

function rightRide(){
	if(monthlyRide > 116.50) {
	alert("You should buy a monthly MetroCard!");
	} else {
	alert("You should pay per ride!");
	}
}		