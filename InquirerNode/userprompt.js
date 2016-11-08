// Load the NPM Package inquirer
var inquirer = require('inquirer');

// Create a "Prompt" with a series of questions.
inquirer.prompt([

	// Here we create a basic text prompt.
	{
		type: "input",
		message: "What is your name?",
		name: "name"
	},

	// Here we create a basic password-protected text prompt.
	{
		type: "password",
		message: "Enter the password",
		name: "password"
	},

	// Here we give the user a list to choose from.
	{
		type: "list",
		message: "Which Beer do Drink?",
		choices: ["Lager", "IPA", "Stout"],
		name: "beers"
	},

	// Here we ask the user to confirm.
	{
		type: "confirm",
		message: "Are you sure:",
		name: "confirm",
		default: true

	}

// Once we are done with all the questions... "then" we do stuff with the answers
// In this case, we store all of the answers into a "user" object that inquirer makes for us. 
]).then(function (user) {
	

	// If we log that user as a JSON, we can see how it looks.
	console.log(JSON.stringify(user, null, 2));

	// If the user confirms, we displays the user's name and beers from the answers. 
	if (user.confirm){

		console.log("==============================================");
		console.log("");
		console.log("Welcome " + user.name);
		console.log("Your " + user.beers + " is ready for pouring!");
		console.log("");
		console.log("==============================================");
	}
	// If the user does not confirm, then a message is provided and the program quits. 

	else {

		console.log("");
		console.log("");
		console.log(" " + user.name + ", must leave the bar!");
		console.log("");
		console.log("");

	}
	

	if (user.password === 'draft') {

		console.log("");
		console.log("");
		console.log(" " + user.name + ", You get the big glass for your beer.");
		console.log("");
		console.log("");
		

	}

	else {

		console.log("");
		console.log("");
		console.log("Please show your Photo ID to the Bartender!");
		console.log("");
		console.log("");
	}

	});