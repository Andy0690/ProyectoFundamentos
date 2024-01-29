class Persons {
	constructor(name, lastName, age, idCard) {
		this.name = name;
		this.lastName = lastName;
		this.age = age;
		this.idCard = idCard;
	}
	printPersons() {
		return "<h3>Person: </h3><br>" +
		`<h4>Name:</h4> ${this.name} <br>` +
		`<h4>Last name:</h4> ${this.lastName} <br>` +
		`<h4>Age:</h4> ${this.age} <br>` +
		`<h4>Id card:</h4> ${this.idCard} <br>`
	}
}

	const person1 = new Persons(
		"Andres", 
		"Yepes", 
		25, 
		1216718199
	);

	function showPersons() {
		let container = document.querySelector(".container-person");
		container.innerHTML = `<div class="container"> ${person1.printPersons()} </div>`;
	}
	showPersons();