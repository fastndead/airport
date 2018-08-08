"use strict";

function dataBase()
{
	this.pilotList = [new pilotModel("Алексей", "Иванов"),
				 new pilotModel("Валентин", "Песков"),
				 new pilotModel("Дмитрий", "Савчук"),];

	this.planeList = [new planeModel("Л-42"),
					 new planeModel("И-211"),
					 new planeModel("А-15"),
					 new planeModel("Ан-6")];

	this.flightList = [new flightModel("Москва", "Саратов", this.pilotList[1], this.planeList[3]),
						new flightModel("Варшава", "Париж", this.pilotList[2], this.planeList[0]),
						new flightModel("Лондон", "Санкт-Петербург", this.pilotList[0], this.planeList[2])];
}