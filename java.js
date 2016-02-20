var myRide;
var monthlyRide;

function monthlyCard(){
	var myRide = document.getElementById("rides").value;
	var monthlyRide = myRide * 2.75;
	alert("Your monthly subway bill is $"
		+ monthlyRide ".");
	rightRide();
}

function rightRide(){
	if(monthlyRide > 116.50) {
	alert("You should buy a monthly MetroCard!");
	} else {
	alert("You should buy a pay per ride!");
	}
}		