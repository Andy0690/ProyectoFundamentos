class Persons {
	constructor(name, lastName, age, idCard) {
		this.name = name;
		this.lastName = lastName;
		this.age = age;
		this.idCard = idCard;
	}
	printPersons() {
		return "<h3>Persona: </h3><br>" +
		`<h4>Nombre:</h4> ${this.name} <br>` +
		`<h4>Apellido:</h4> ${this.lastName} <br>` +
		`<h4>Edad:</h4> ${this.age} <br>` +
		`<h4>Cédula:</h4> ${this.idCard} <br>`
	}
}

	const person1 = new Persons(
		"Andres", 
		"Yepes", 
		28, 
		1216718199
	);

	function showPersons() {
		let container = document.querySelector(".container-person");
		container.innerHTML = `<div class="container"> ${person1.printPersons()} </div>`;
	}
	showPersons();