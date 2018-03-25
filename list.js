function addXButton(e) {
	console.log("remove");
	var xButton = document.createElement("span");
	var xButtonValue = document.createTextNode("\u00D7");
	xButton.appendChild(xButtonValue);
	xButton.addEventListener(
		"click",
	 	function (ev) {
	 		console.log(ev.target.parentElement.tagName);
	 		ev.target.parentElement.style.display = "none";
	 	},
	 	false);
	xButton.classList.add("close");
	e.appendChild(xButton);
}

function addNew() {
	console.log("addNew!!!");
	
	// Create li element, get input value, check for empty string, clear out input value
	var newLi = document.createElement("li");
	var inputValue = document.getElementById("new").value;
	console.log(inputValue);
	var livalue = document.createTextNode(inputValue);
	newLi.appendChild(livalue);
	var l = document.getElementById("uList");
	if (inputValue == "") {
		alert ("Put something, yo!");
	} else {
		l.appendChild(newLi);
	}
	document.getElementById("new").value = "";

	// Add cross button to remove from list
	addXButton(newLi);

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