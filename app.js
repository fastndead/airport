"use strict";

window.onload = function(){
	Run = new Run();
	Run.initEventListeners();
}

function Run(){

	this.view	= new view();
	this.popup 	= new popup();
	this.pilotProvider 	= new pilotProvider(); 
	this.planeProvider 	= new planeProvider();
	this.flightProvider = new flightProvider();
	this.view.refreshPilotTable(this.pilotProvider.getAll());
	this.view.refreshPlaneTable(this.planeProvider.getAll());
	this.view.refreshPlaneSelect(this.planeProvider.getAll());
	this.view.refreshFlightTable(this.flightProvider.getAll());
	this.view.refreshPilotSelect(this.pilotProvider.getAll());

	this.initEventListeners = function(){
		[].forEach.call(document.getElementsByClassName('popup span'), function(v,i,a) {
			a[i].addEventListener("click", Run.popup.popupStop);
		});

		[].forEach.call(document.getElementsByClassName('popup planes notInfo'), function(v,i,a) {
			a[i].addEventListener("click", Run.popup.popupStopAllExceptPlaneInfo);
		});

		[].forEach.call(document.getElementsByClassName('popup pilots notInfo'), function(v,i,a) {
			a[i].addEventListener("click", Run.popup.popupStopAllExceptPilotInfo);
		});

		document.onkeyup = function(e) {
		   if (e.key=='Escape'||e.key=='Esc'||e.keyCode==27){
		     Run.popup.popupStop();
		   }
		}

		document.getElementById("addPilotBtn").addEventListener("click", Run.addPilot);
		document.getElementById("editBtn").addEventListener("click", Run.EditPilot);
		document.getElementById("removeBtn").addEventListener("click", Run.removePilot);
		document.getElementById("popupBtnPilotsAdd").addEventListener("click", Run.popup.popupBtnPilotsAdd);
		document.getElementById("popupBtnEditPilots").addEventListener("click", Run.popup.popupBtnPilotsEdit);	
		document.getElementById("popupBtnDeletePilots").addEventListener("click", Run.popup.popupBtnPilotsRemove);
		document.getElementById("addPlaneBtn").addEventListener("click", Run.addPlane);		
		document.getElementById("editBtnPlanes").addEventListener("click", Run.EditPlane);
		document.getElementById("removePlaneBtn").addEventListener("click", Run.removePlane);
		document.getElementById("popupBtnPlanes").addEventListener("click", Run.popup.popupBtnPlanesAdd);
		document.getElementById("popupBtnPlanesEdit").addEventListener("click", Run.popup.popupBtnPlanesEdit);
		document.getElementById("popupBtnPlanesRemove").addEventListener("click", Run.popup.popupBtnPlanesRemove);
		document.getElementById("editBtnFlights").addEventListener("click", Run.editFlights);		
		document.getElementById("addFlight").addEventListener("click", Run.addFlight);	
		document.getElementById("popupBtnEditFlight").addEventListener("click", Run.popup.popupBtnFlightsEdit);	
		document.getElementById("addFlightBtn").addEventListener("click", Run.popup.popupBtnFlightsAdd);	
		document.getElementById("PilotsBtn").addEventListener("click", Run.popup.popupBtnPilots);	
		document.getElementById("PlanesBtn").addEventListener("click", Run.popup.popupBtnPlanes);	
		document.getElementById("popupBtnFlightsRemove").addEventListener("click", Run.popup.popupBtnFlightsRemove);	
		document.getElementById("removeFlightBtn").addEventListener("click", Run.removeFlight);	
		
	}

	this.addPilot = function(){
		try{
			var inputPilot = new pilotModel(document.getElementById("firstName").value, document.getElementById("lastName").value);
		}
		catch(e){
			alert(e);
			return;
		}
		try{
			Run.pilotProvider.push(inputPilot);
		}
		catch(e){
			alert(e);
		}
		Run.view.refreshPilotTable(Run.pilotProvider.getAll());
		Run.view.refreshPilotSelect(Run.pilotProvider.getAll());
		Run.popup.popupStopAllExceptPilotInfo();
	}

	this.addPlane = function(){
		try{
			var inputPlane = new planeModel(document.getElementById("planeName").value);	
		}
		catch(e){
			alert(e);
			return;
		}
		Run.planeProvider.push(inputPlane);
		Run.view.refreshPlaneTable(Run.planeProvider.getAll());
		Run.view.refreshPlaneSelect(Run.planeProvider.getAll());
		Run.popup.popupStopAllExceptPlaneInfo();
	}

	this.addFlight = function(){
		var planeSelect = document.getElementById("planeSelect");
		var pilotSelect = document.getElementById("pilotSelect");
		var pilot = Run.pilotProvider.getByIndex(pilotSelect.selectedIndex);
		var plane = Run.planeProvider.getByIndex(planeSelect.selectedIndex);
		try{
			var newFlight = new flightModel(document.getElementById("destination1").value, document.getElementById("destination2").value, 
				pilot, plane);
		}
		catch(e){
			alert(e);
			return;
		}
		Run.flightProvider.push(newFlight);
		Run.view.refreshFlightTable(Run.flightProvider.getAll());
		Run.view.clearFlightTxtFields();
		Run.popup.popupStop();
	}

	this.removeFlight = function(){
		var indexToDelete = document.getElementById("DeleteFlightField").value - 1;
		if(!Run.flightProvider.indexValidator(indexToDelete)){
			alert("Неправильно введены данные, попробуйте ещё.\n" );
			return;
		}
		Run.flightProvider.remove(indexToDelete);
		Run.view.refreshFlightTable(Run.flightProvider.getAll());
		Run.popup.popupStop();
	}
	this.EditPilot = function(){
		var indexToEdit = document.getElementById("EditPilotsField").value - 1;
		var editBtn =  document.getElementById("editBtn");
		var newFirstName;
		var newLastName;
		if(!isFinite(indexToEdit)){
			alert("Неправильно введены данные, попробуйте ещё.\n" );
			return;
		}
		try{
			document.getElementById("EditPilotsField").value = Run.pilotProvider.getByIndex(indexToEdit).getFirstName();
		}
		catch(e){	
			alert("Неправильное значение для редактирования. " + e);
			return;
		}

		function editName(){
				newFirstName = document.getElementById("EditPilotsField").value;
				document.getElementById("popupTextEdit").innerHTML = "Измените фамилию пилота:";
				document.getElementById("EditPilotsField").value = Run.pilotProvider.getByIndex(indexToEdit).getLastName();
				editBtn.removeEventListener("click", editName);
				editBtn.addEventListener("click", editLastName);
			}
		function editLastName(){
				newLastName = document.getElementById("EditPilotsField").value;
				try{
					Run.pilotProvider.replace(new pilotModel(newFirstName, newLastName), indexToEdit);
				}
				catch(e){
					alert("Были введены неверные значения. " + e);
					Run.popup.popupStopAllExceptPilotInfo();
					return;
				}
				Run.view.refreshPilotTable(Run.pilotProvider.getAll());
				document.getElementById("popupTextEdit").innerHTML = "Введите номер пилота:";
				editBtn.removeEventListener("click", editLastName);
				editBtn.addEventListener("click", Run.EditPilot);
				Run.view.refreshPilotSelect(Run.pilotProvider.getAll());
				Run.view.refreshFlightTable(Run.flightProvider.getAll());
				Run.popup.popupStopAllExceptPilotInfo();

		}
		document.getElementById("popupTextEdit").innerHTML = "Измените имя пилота:"
		editBtn.removeEventListener("click", Run.EditPilot);
		editBtn.addEventListener("click", editName)
		
		}

	this.removePlane = function(){
		var indexToDelete = document.getElementById("DeletePlaneField").value;
		try{
			Run.planeProvider.remove(indexToDelete - 1);
		}
		catch(e){
			alert("Неправильно введены данные, попробуйте ещё.\n" + e);
		}
		Run.view.refreshPlaneTable(Run.planeProvider.getAll());
		Run.popup.popupStopAllExceptPlaneInfo();
	}

	this.removePilot = function(){

		var indexToDelete = +document.getElementById("RemovePilotsField").value;
		if(!isFinite(indexToDelete)){
			alert("Неправильно введены данные, попробуйте ещё.\n" );
			return;
		}
		Run.pilotProvider.remove(indexToDelete - 1);
		Run.view.refreshPilotTable(Run.pilotProvider.getAll());
		Run.popup.popupStopAllExceptPilotInfo();
	}

	this.EditPlane = function(){
		var indexToEdit = document.getElementById("EditPlanesField").value - 1;
		var newName;

		if(!isFinite(indexToEdit)){
			alert("Неправильно введены данные, попробуйте ещё." );
			return;
		}

		try{
			document.getElementById("EditPlanesField").value = Run.planeProvider.getByIndex(indexToEdit).getName();
		}
		catch(e){	
			alert("Неправильно введены данные, попробуйте ещё.");
			return;
		}

		function nameEdit(){
				newName = document.getElementById("EditPlanesField").value;
				try{
					 Run.planeProvider.replace(new planeModel(newName), indexToEdit);
				}
				catch(e){
					alert("Были введены неверные значения. " + e);
					return;
				}
				Run.view.refreshPlaneTable(Run.planeProvider.getAll());
				Run.popup.popupStopAllExceptPlaneInfo();			
				document.getElementById("popupTextEdit").innerHTML = "Введите номер самолёта:";
				document.getElementById("editBtnPlanes").removeEventListener("click", nameEdit);
				document.getElementById("editBtnPlanes").addEventListener("click", Run.EditPlane);
				Run.view.refreshPlaneSelect(Run.planeProvider.getAll());
			}

		document.getElementById("popupTextEdit").innerHTML = "Измените название самолёта:"
		document.getElementById("editBtnPlanes").removeEventListener("click", Run.EditPlane);
		document.getElementById("editBtnPlanes").addEventListener("click", nameEdit) 
	}
	
	this.editFlights = function(){
		function editFlight(){
			Run.flightProvider.replace(new flightModel(destination1Input.value, destination2Input.value,
			 	Run.pilotProvider.getByIndex(pilotSelect.selectedIndex), Run.planeProvider.getByIndex(planeSelect.selectedIndex)), indexToEdit);
			Run.popup.popupStop();
			Run.view.refreshFlightTable(Run.flightProvider.getAll());
			editBtn.removeEventListener("click", editFlight);
		}


		var editBtn 	= document.getElementById("editBtnFlights2");
		var planeSelect = document.getElementById("popupPlaneSelect");
		var pilotSelect = document.getElementById("popupPilotSelect");
		var destination1Input = document.getElementById("editFlightDestination1");
		var destination2Input = document.getElementById("editFlightDestination2");
		
		var indexToEdit = document.getElementById("EditFlightField").value - 1;
		if(!Run.flightProvider.indexValidator(indexToEdit)){
			alert("Неправильно введены данные, попробуйте ещё." );
			return;
		}

		Run.popup.popupBtnFlightsEdit2();
		Run.popup.popupRefreshPlaneSelect(Run.planeProvider.getAll());
		Run.popup.popupRefreshPilotSelect(Run.pilotProvider.getAll());

		destination1Input.value = Run.flightProvider.getByIndex(indexToEdit).getDestination1();
		destination2Input.value = Run.flightProvider.getByIndex(indexToEdit).getDestination2();


		editBtn.addEventListener("click", editFlight);	
	}
}