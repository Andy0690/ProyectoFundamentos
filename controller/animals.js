class Animals {
	constructor(name, gender, breed) {
		this.name = name;
		this.gender = gender;
		this.breed = breed;
	}
	printAnimals() {
		return "<h3>Animal: </h3><br>" +
		`Name: ${this.name} <br>` +
		`Gender: ${this.gender} <br>` +
		`Breed: ${this.breed}`
	}
}
const cat1 = new Animals (
	"gato", 
	"macho", 
	"persa"
);

function showAnimals() {
	let container = document.querySelector(".container-animal");
	container.innerHTML = `<div class="container"> ${cat1.printAnimals()} </div>`;
}
showAnimals();