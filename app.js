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
		this.view.stopPopup();
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
		this.view.stopPopup();
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




	this.removeFlight = function(){
		var indexToDelete = prompt("Введите номер рейса, который необходимо удалить", "");
		if(!isFinite(indexToDelete)){
			alert("Неправильно введены данные, попробуйте ещё.\n" );
			return;
		}
		flightList.splice(indexToDelete - 1, 1);
		this.view.refreshFlightTable();
	}
	this.EditPilot = function(){
		var indexToEdit = document.getElementById("EditPilotsField").value - 1;
		var newFirstName;
		var newLastName;
		if(!isFinite(indexToEdit)){
			alert("Неправильно введены данные, попробуйте ещё.\n" );
			return;
		}
		try{
			document.getElementById("EditPilotsField").value = pilotList[indexToEdit].getFirstName();
		}
		catch(e){	
			alert("Неправильное значение для редактирования.");
			return;
		}
		document.getElementById("popupTextEdit").innerHTML = "Измените имя пилота:"
		document.getElementById("editBtn").onclick = function(){
				newFirstName = document.getElementById("EditPilotsField").value;
				document.getElementById("popupTextEdit").innerHTML = "Измените фамилию пилота:";
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
					Run.view.stopPopup();
					document.getElementById("popupTextEdit").innerHTML = "Введите номер пилота:";
					document.getElementById("editBtn").onclick = Run.EditPlane;
				}
			}
		}

	this.removePlane = function(){
		var indexToDelete = document.getElementById("DeletePlaneField").value;
		try{
			planeList.splice(indexToDelete - 1, 1);
		}
		catch(e){
			alert("Неправильно введены данные, попробуйте ещё.\n" + e);
		}
		this.view.refreshPlaneTable();
		this.view.stopPopup();
	}

	this.removePilot = function(){

		var indexToDelete = +document.getElementById("RemovePilotsField").value;
		if(!isFinite(indexToDelete)){
			alert("Неправильно введены данные, попробуйте ещё.\n" );
			return;
		}
		pilotList.splice(indexToDelete - 1, 1);
		this.view.refreshPilotTable();
		this.view.stopPopup();
	}

	this.EditPlane = function(){
		var indexToEdit = document.getElementById("EditPlanesField").value - 1;
		var newName;

		if(!isFinite(indexToEdit)){
			alert("Неправильно введены данные, попробуйте ещё.\n" );
			return;
		}

		try{
			document.getElementById("EditPlanesField").value = planeList[indexToEdit].getName();
		}
		catch(e){	
			alert("Неправильное значение для редактирования.");
			return;
		}
		document.getElementById("popupTextEdit").innerHTML = "Измените название самолёта:"
		document.getElementById("editBtnPlanes").onclick = function(){
				newName = document.getElementById("EditPlanesField").value;
				try{
					planeList[indexToEdit] = new planeModel(newName);
				}
				catch(e){
					alert("Были введены неверные значения.")
					return;
				}
				Run.view.refreshPlaneTable();
				Run.view.stopPopup();			
				document.getElementById("popupTextEdit").innerHTML = "Введите номер самолёта:";
				document.getElementById("editBtnPlanes").onclick = Run.EditPlane;
			}

		}
}