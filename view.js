"use strict";

function view(){

	this.refreshPilotTable = function(){
		var table = document.getElementById("pilotTable");
		table.innerHTML = "<tr><th>№</th><th>Имя</th><th>Фамилия</th></tr>";
		for(var i = 0; i < pilotList.length; i++){
			var row = table.insertRow(table.lastIndex);
			var cell1 = row.insertCell(0)
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			cell1.innerHTML = i + 1
			cell2.innerHTML = pilotList[i].getFirstName();
			cell3.innerHTML = pilotList[i].getLastName();
		}
	}


	this.refreshPlaneTable = function(){
		var table = document.getElementById("planeTable");
		table.innerHTML = "<tr><th>№</th><th>Название</th></tr>";
		for(var i = 0; i < planeList.length; i++){
			var row = table.insertRow(table.lastIndex);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			cell2.innerHTML = planeList[i].name;
			cell1.innerHTML = i + 1;
		}
	}

	this.refreshPlaneSelect = function(){
		var x = document.getElementById("planeSelect");
		x.innerHTML = ""
		for(var i = 0; i < planeList.length; i++){
			var option = document.createElement("option");
			option.text = planeList[i].name;
			x.add(option);
		}
	}

	this.refreshPilotSelect = function(){
		var x = document.getElementById("pilotSelect");
		x.innerHTML = ""
		for(var i = 0; i < pilotList.length; i++){
			var option = document.createElement("option");
			option.text = pilotList[i].firstName + " " + pilotList[i].lastName;
			x.add(option);
		}
	}

	this.refreshFlightTable = function(){
		var table = document.getElementById("flightTable");
		table.innerHTML = "<tr><th>№</th><th>Пилот</th><th>Самолёт</th><th>Рейс</th></tr>";
		for(var i = 0; i < flightList.length; i++)
		{
			var row = table.insertRow(table.lastIndex);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			console.log(flightList[i].indexPilot);
			cell1.innerHTML = i + 1;
			cell2.innerHTML = flightList[i].pilot.toString();
			cell3.innerHTML = flightList[i].plane.toString();
			cell4.innerHTML = flightList[i].destination1 + " - " + flightList[i].destination2;
		}
	}

	this.stopPopupPilots = function(){
		document.getElementById("firstName").value = ""
		document.getElementById("lastName").value = ""
		document.getElementById("popupPilots").style.display = "none";
	}

	this.stopPopupPlanes = function(){
		document.getElementById("planeName").value = "";
		document.getElementById("popupPlanes").style.display = "none";
	}

	this.clearFlightTxtFields = function(){
		document.getElementById("destination1").value = "";
		document.getElementById("destination2").value = "";
	}

	this.popupBtnPilots = function(){
		var popupItems = document.getElementsByClassName("popup pilots add");
		for(var i = 0; i < popupItems.length; i++){
			popupItems[i].style.display = "block";
		}
	}

	this.popupBtnPilotsEdit = function(){
		var popupItems = document.getElementsByClassName("popup pilots edit");
		for(var i = 0; i < popupItems.length; i++){
			popupItems[i].style.display = "block";
		}
	}

	this.popupBtnPlanes = function(){
		document.getElementById("popupPlanes").style.display = "block";
	}

	this.stopPopupPilotsEdit = function(){
		document.getElementById("EditPilotsField").value = "";
		document.getElementById("popupPlanes").style.display = "none";
		var popupItems = document.getElementsByClassName("popup pilots edit");
		for(var i = 0; i < popupItems.length; i++){
			popupItems[i].style.display = "none";
		}
	}
}