"use strict";

function flightModel(destination1, destination2, pilot, plane){	
	if (destination1 == "" || destination2 == 0 || pilot == null || plane == null) {
		throw "Неверно введены данный рейса.";
	}

	this.destination1 = destination1;
	this.destination2 = destination2;
	this.pilot = pilot;
	this.plane = plane;
};
