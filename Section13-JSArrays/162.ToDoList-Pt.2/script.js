var userAction = new String();
var toDoList = [];

function newAction() {
	toDoList.push (prompt("Please enter an action"));
}

function list() {
	console.clear();
	if (toDoList.length != 0){
		console.log("*******************************");
		toDoList.forEach(function(Item) {
			console.log(toDoList.indexOf(Item) + ": " + Item);
		})
		console.log("*******************************");
	} else {
		console.log("Your list is empty");
	}
	
}

function deleteAction (idexToDelete) {
	// check if index exists. If not leave function
	if (toDoList[idexToDelete] == undefined) {
		console.log("index doesn't exists");
		return;
	}

	// https://www.w3schools.com/jsref/jsref_splice.asp
	toDoList.splice(idexToDelete, 1);
	list();
}


while (userAction.toLowerCase() !== "quit") {
	userAction = prompt("What would you like to do?");
	userAction = userAction.toLowerCase();

	if (userAction === "new") {
		newAction();
	}
	else if (userAction === "list") {
		list();
	}
	else if (userAction === "delete") {
		deleteAction(prompt("Please enter an Index to delete:"));
	}
}