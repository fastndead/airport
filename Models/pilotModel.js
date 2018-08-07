"use strict";

function pilotModel(firstName, lastName){
	if(firstName == "" || lastName == ""){
			throw "Неправильное имя пилота.";
		}
	this.firstName = firstName;
	this.lastName  = lastName;

	this.getFirstName = function(){
		return firstName;
	}

	this.getLastName = function(){
		return lastName;
	}

	this.getFullName = function(){
		return firstName + " " + lastName;
	}
};



