function addXButton(e) {
	console.log("remove2");
	var tdNode = e.children[3];
	var xButtonValue = document.createTextNode("\u00D7");
	tdNode.addEventListener(
		"click",
	 	function (ev) {
	 		console.log(ev.target.parentElement.tagName);
	 		var parent = ev.target.parentElement.parentElement;
	 		var row = ev.target.parentElement;
	 		parent.removeChild(row);
	 	},
	 	false);
	tdNode.appendChild(xButtonValue);
}


function appendToTable(itemList) {
	var race = itemList[0];
	var state = itemList[1];
	var rdate = itemList[2];
	if (itemList[0] == "") {
		alert ("Put something, yo!");
	} else {

		var newRow = document.createElement("tr");
		for(i=0; i<3; i++) {
			var newTd = document.createElement("td");
			if (i == 0) {
				// Adding greyed out
				newTd.style.textAlign = "left";
				newTd.addEventListener(
					"click",
					function (ev){
						if(ev.target.tagName == "TD"){
						ev.target.parentElement.classList.toggle("done");
					}
				},
				false);
			}
			var itemValue = document.createTextNode(itemList[i]);
			newTd.appendChild(itemValue);
			newRow.appendChild(newTd);
		}
		var newTd = document.createElement("td");
		newRow.appendChild(newTd);

		var listTable = document.getElementById("listTable");
		// Add cross button to remove from list
		addXButton(newRow);
		listTable.appendChild(newRow);
	}
}

function showAddNew() {
	console.log("showAddNew");
	var addNewTable = document.getElementById("newTable");
	addNewTable.classList.toggle("hide");
	var addButton = document.getElementById("addBtn");
	addButton.classList.toggle("hide");
}

function cancelAdd() {
	console.log("cancelAdd");
	var addButton = document.getElementById("addBtn");
	addButton.classList.toggle("hide");
	var addNewTable = document.getElementById("newTable");
	addNewTable.classList.toggle("hide");
}

function clearValues(idList) {
	for (var i = 0; i < idList.length; i++) {
		document.getElementById(idList[i]).value = "";
	}
}

function parseForm() {
	console.log("parseForm");

	var race = document.getElementById("race").value || "";
	var state = document.getElementById("state").value  || "";
	var rdate = document.getElementById("rdate").value || "";

	appendToTable([race, state, rdate]);

	clearValues(["race", "state", "rdate"]);
}

function filterList() {
	var filter = document.getElementById('filterBar').value.toLowerCase();
	console.log("filterList: " + filter);
	var tds = document.getElementById("listTable").getElementsByTagName("td");
	for (var i = 0; i < tds.length; i+=4) {
		console.log(tds[i].innerText.toLowerCase());
		if (tds[i].innerText.toLowerCase().indexOf(filter) > -1) {
			tds[i].parentElement.style.display = "";
		}
		else {
			tds[i].parentElement.style.display = "none";
		}
	}
}


var listTable = document.getElementById("listTable");
var rows = listTable.rows;
for (var i=1; i< rows.length; i++) {
	addXButton(rows[i]);

	console.log("Greying out");
	var raceName = rows[i].children[0];
	raceName.addEventListener(
	"click",
	function (ev){
		if(ev.target.tagName == "TD"){
			ev.target.parentElement.classList.toggle("done");
		}
	},
	false);
}

