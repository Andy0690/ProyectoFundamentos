class Persons {
	constructor(name, lastName, age, idCard) {
		this.name = name;
		this.lastName = lastName;
		this.age = age;
		this.idCard = idCard;
	}
	printPersons() {
		return "<h3>Person: </h3><br>" +
		`Name: ${this.name} <br>` +
		`Last name: ${this.lastName} <br>` +
		`Age: ${this.age} <br>` +
		`Id card: ${this.idCard} <br>`
	}
}

	const person1 = new Persons(
		"Andres", 
		"Yepes", 
		25, 
		1216718195
	);

	function showPersons() {
		let container = document.querySelector(".container-person");
		container.innerHTML = `<div class="container"> ${person1.printPersons()} </div>`;
	}
	showPersons();