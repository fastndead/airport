"use strict";


window.onload = function(){
	Run = new Run();
}

function Run(){

	this.view = new view();
	this.view.refreshPilotTable();
	this.view.refreshPlaneTable();
	this.view.refreshPlaneSelect();
	this.view.refreshFlightTable();
	this.view.refreshPilotSelect();

	this.addPilot = function(){
		try{
			var inputPilot = new pilotModel(document.getElementById("firstName").value, document.getElementById("lastName").value);
		}
		catch(e){
			alert(e);
			return;
		}
		pilotList.push(inputPilot);
		this.view.refreshPilotTable();
		this.view.refreshPilotSelect();
		this.view.stopPopupPilots();
	}

	this.addPlane = function(){
		try{
			var inputPlane = new planeModel(document.getElementById("planeName").value);	
		}
		catch(e){
			alert(e);
			return;
		}
		planeList.push(inputPlane);
		this.view.refreshPlaneTable();
		this.view.refreshPlaneSelect();
		this.view.stopPopupPlanes();
	}

	this.addFlight = function(){
		var planeSelect = document.getElementById("planeSelect");
		var pilotSelect = document.getElementById("pilotSelect");
		try{
			var newFlight = new flightModel(document.getElementById("destination1").value, document.getElementById("destination2").value, 
				pilotSelect.options[pilotSelect.selectedIndex].value, planeSelect.options[planeSelect.selectedIndex].value);
		}
		catch(e){
			alert(e);
			return;
		}
		flightList.push(newFlight);
		this.view.refreshFlightTable();
		this.view.clearFlightTxtFields();
	}


	this.removePilot = function(){
		var indexToDelete = prompt("Введите номер пилота, которого необходимо удалить", "");

		if(indexToDelete == null || indexToDelete == "")
		{
			alert("Неправильное значение для удаления.");
			return;
		}
		pilotList.splice(indexToDelete - 1, 1);
		this.view.refreshPilotTable();
	}

	this.removePlane = function(){
		var indexToDelete = prompt("Введите номер самолёта, который необходимо удалить", "");
			if(indexToDelete == null || indexToDelete == "")
		{
			alert("Неправильное значение для удаления.");
			return;
		}
		planeList.splice(indexToDelete - 1, 1);
		this.view.refreshPlaneTable();
	}

	this.removeFlight = function(){
		var indexToDelete = prompt("Введите номер рейса, который необходимо удалить", "");
		if(indexToDelete == null || indexToDelete == "")
		{
			alert("Неправильное значение для удаления.");
			return;
		}
		flightList.splice(indexToDelete - 1, 1);
		this.view.refreshFlightTable();
	}
	this.EditPilot = function(){
		var indexToEdit = document.getElementById("EditPilotsField").value - 1;
		var newFirstName;
		var newLastName;

		try{
			document.getElementById("EditPilotsField").value = pilotList[indexToEdit].getFirstName();
		}
		catch(e){	
			alert("Неправильное значение для редактирования.");
			return;
		}
		document.getElementById("popupTextEdit").innerHTML = "Измените имя пилота."
		document.getElementById("editBtn").onclick = function(){
				newFirstName = document.getElementById("EditPilotsField").value;
				document.getElementById("popupTextEdit").innerHTML = "Измените фамилию пилота.";
				document.getElementById("EditPilotsField").value = pilotList[indexToEdit].getLastName();
				document.getElementById("editBtn").onclick = function(){
					newLastName = document.getElementById("EditPilotsField").value;
					try{
						pilotList[indexToEdit] = new pilotModel(newFirstName, newLastName);
					}
					catch(e){
						alert("Были введены неверные значения.")
						return;
					}
					Run.view.refreshPilotTable();
					Run.view.stopPopupPilotsEdit();
				}
			}
		}

}