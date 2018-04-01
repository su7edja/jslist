function addXButton(e) {
	console.log("remove");
	var xButton = document.createElement("span");
	var xButtonValue = document.createTextNode("\u00D7");
	xButton.appendChild(xButtonValue);
	xButton.addEventListener(
		"click",
	 	function (ev) {
	 		console.log(ev.target.parentElement.tagName);
	 		// ev.target.parentElement.style.display = "none";
	 		var ul = ev.target.parentElement.parentElement;
	 		var li = ev.target.parentElement;
	 		ul.removeChild(li);
	 	},
	 	false);
	xButton.classList.add("close");
	e.appendChild(xButton);
}

function appendToList(item) {
	var newLi = document.createElement("li");
	var livalue = document.createTextNode(item);
	newLi.appendChild(livalue);
	var l = document.getElementById("uList");
	if (item == "") {
		alert ("Put something, yo!");
	} else {
		// Add cross button to remove from list
		addXButton(newLi);
		l.appendChild(newLi);
	}
}

function showAddNew() {
	console.log("showAddNew");
	var addNewTable = document.getElementById("newTable");
	if (addNewTable.style.display == "none") {
		addNewTable.style.display = "";
	}
	else {
		addNewTable.style.display = "none";
	}
}

function parseForm() {
	console.log("parseForm");
	var todo = document.getElementById("todo").value || "";
	var state = document.getElementById("state").value;
	var rdate = document.getElementById("rdate").value;
	console.log(todo + ", " + state + ", " + rdate);

	appendToList(todo);
}

function filterList() {
	var filter = document.getElementById('filterBar').value.toLowerCase();
	console.log("filterList: " + filter);
	var lis = document.getElementById("uList").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		console.log(lis[i].innerText.toLowerCase().slice(0,-1));
		if (lis[i].innerText.toLowerCase().slice(0,-1).indexOf(filter) > -1) {
			lis[i].style.display = "";
		}
		else {
			lis[i].style.display = "none";
		}
	}
}

console.log("strike");
// Get ul element, attach eventListener for every li in it
var l = document.getElementById("uList");
l.addEventListener(
	"click",
	function (ev){
		if(ev.target.tagName == "LI"){
			ev.target.classList.toggle("strike");
		}
	},
	false);

var items = l.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {
  addXButton(items[i]);
}	

