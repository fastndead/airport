"use strict";

var pilotList = [new pilotModel("Алексей", "Иванов"),
				 new pilotModel("Валентин", "Песков"),
				 new pilotModel("Дмитрий", "Савчук"),];
var planeList = [new planeModel("Л-42"),
				 new planeModel("И-211"),
				 new planeModel("А-15"),
				 new planeModel("Ан-6")];
var flightList = [new flightModel("Москва", "Саратов", pilotList[1], planeList[3]),
					new flightModel("Варшава", "Париж", pilotList[2], planeList[0]),
					new flightModel("Лондон", "Санкт-Петербург", pilotList[0], planeList[2])];