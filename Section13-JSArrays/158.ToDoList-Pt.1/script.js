var userAction = new String();
var toDoList = [];

function newAction() {
	toDoList.push (prompt("Please enter an action"));
}

function list() {
	console.log(toDoList);
}


while (userAction.toLowerCase() !== "quit") {
	userAction = prompt("What would you like to do?");

	if (userAction === "new") {
		newAction();
	}
	else if (userAction === "list") {
		list();
	}
}