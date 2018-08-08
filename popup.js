function popup(){

	this.popupRefreshPlaneSelect = function(){
		var x = document.getElementById("popupPlaneSelect");
		x.innerHTML = ""
		for(var i = 0; i < planeList.length; i++){
			var option = document.createElement("option");
			option.text = planeList[i].name;
			x.add(option);
		}
	}

	this.popupRefreshPilotSelect = function(){
		var x = document.getElementById("popupPilotSelect");
		x.innerHTML = ""
		for(var i = 0; i < pilotList.length; i++){
			var option = document.createElement("option");
			option.text = pilotList[i].firstName + " " + pilotList[i].lastName;
			x.add(option);
		}
	}

	this.popupBtnPilotsAdd = function(){
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

	this.popupBtnPlanesAdd = function(){
		var popupItems = document.getElementsByClassName("popup planes add");
		for(var i = 0; i < popupItems.length; i++){
			popupItems[i].style.display = "block";
		}
	}

	this.popupStop = function(){
		var popupItems = document.getElementsByClassName("txt");
		for(var i = 0; i < popupItems.length; i++){
			popupItems[i].value = "";
		}

		var popupItems = document.getElementsByClassName("popup");
		for(var i = 0; i < popupItems.length; i++){
			popupItems[i].style.display = "none";
		}
	}

	this.popupBtnPlanesRemove = function(){
		var popupItems = document.getElementsByClassName("popup planes remove");
		for(var i = 0; i < popupItems.length; i++){
			popupItems[i].style.display = "block";
		}
	}

	this.popupBtnPilotsRemove = function(){
		var popupItems = document.getElementsByClassName("popup pilots remove");
		for(var i = 0; i < popupItems.length; i++){
			popupItems[i].style.display = "block";
		}
	}

	this.popupBtnPlanesEdit = function(){
		var popupItems = document.getElementsByClassName("popup planes edit");
		for(var i = 0; i < popupItems.length; i++){
			popupItems[i].style.display = "block";
		}
	}

	this.popupBtnFlightsEdit = function(){
		var popupItems = document.getElementsByClassName("popup flights edit");
		for(var i = 0; i < popupItems.length; i++){
			popupItems[i].style.display = "block";
		}
	}

	this.popupBtnFlightsEdit2 = function(){
		this.popupStop();
		var popupItems = document.getElementsByClassName("popup flights edit2");
		for(var i = 0; i < popupItems.length; i++){
			popupItems[i].style.display = "block";
		}
	}

	this.popupBtnFlightsRemove = function(){
		var popupItems = document.getElementsByClassName("popup flights remove");
		for(var i = 0; i < popupItems.length; i++){
			popupItems[i].style.display = "block";
		}
	}
	this.popupBtnFlightsAdd = function(){
		var popupItems = document.getElementsByClassName("popup flight add");
		for(var i = 0; i < popupItems.length; i++){
			popupItems[i].style.display = "block";
		}
	}

	this.popupBtnPilots = function(){
		var popupItems = document.getElementsByClassName("popup pilots info");
		for(var i = 0; i < popupItems.length; i++){
			popupItems[i].style.display = "block";
		}
	}

	this.popupBtnPlanes = function(){
		var popupItems = document.getElementsByClassName("popup planes info");
		for(var i = 0; i < popupItems.length; i++){
			popupItems[i].style.display = "block";
		}
	}

	this.popupStopAllExceptPlaneInfo = function(){
		Run.popup.popupStop();
		Run.popup.popupBtnPlanes();
	}

	this.popupStopAllExceptPilotInfo = function(){
		Run.popup.popupStop();
		Run.popup.popupBtnPilots();
	}
}