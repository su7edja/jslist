function strike() {
	console.log("strike");
}

function remove() {
	console.log("remove");
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
	remove();

	// Add strike capability
	strike();

}