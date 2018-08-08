"use strict";

function view(){

	this.refreshPilotTable = function(params){
		var table = document.getElementById("pilotTable");
		table.innerHTML = "<tr><th>№</th><th>Имя</th><th>Фамилия</th></tr>";

		params.forEach(function callback(currentValue, index, array){
			var row = table.insertRow(table.lastIndex);
			var indexCell 		= row.insertCell(0)
			var firstNameCell 	= row.insertCell(1);
			var lastNameCell 	= row.insertCell(2);

			indexCell.innerHTML 	= index + 1;
			firstNameCell.innerHTML = currentValue.getFirstName();
			lastNameCell.innerHTML 	= currentValue.getLastName();
		});
	}


	this.refreshPlaneTable = function(params){
		var table = document.getElementById("planeTable");
		table.innerHTML = "<tr><th>№</th><th>Название</th></tr>";

		params.forEach(function callback(currentValue, index, array){
			var row = table.insertRow(table.lastIndex);
			var indexCell = row.insertCell(0);
			var nameCell = row.insertCell(1);
			indexCell.innerHTML = index + 1;
			nameCell.innerHTML 	= currentValue.getName();
		});
	}

	this.refreshPlaneSelect = function(params){
		var x = document.getElementById("planeSelect");
		x.innerHTML = ""

		params.forEach(function callback(currentValue, index, array){
			var option = document.createElement("option");
			option.text = currentValue.getName();
			x.add(option);
		})
	}

	this.refreshPilotSelect = function(params){
		var x = document.getElementById("pilotSelect");
		x.innerHTML = ""

		params.forEach(function callback(currentValue, index, array){
			var option = document.createElement("option");
			option.text = currentValue.getFullName();
			x.add(option);
		})
	}



	this.refreshFlightTable = function(params){
		var table = document.getElementById("flightTable");
		table.innerHTML = "<tr><th>№</th><th>Пилот</th><th>Самолёт</th><th>Рейс</th></tr>";

		params.forEach(function callback(currentValue, index, array)
		{
			var row = table.insertRow(table.lastIndex);
			var indexCell = row.insertCell(0);
			var pilotCell = row.insertCell(1);
			var planeCell = row.insertCell(2);
			var destinationsCell = row.insertCell(3);

			indexCell.innerHTML = index + 1;
			pilotCell.innerHTML = currentValue.pilot.getFullName();
			planeCell.innerHTML = currentValue.plane.getName();
			destinationsCell.innerHTML = currentValue.destination1 + " - " + currentValue.destination2;
		});
	}

	this.clearFlightTxtFields = function(){
		document.getElementById("destination1").value = "";
		document.getElementById("destination2").value = "";
	}

	
	
}

