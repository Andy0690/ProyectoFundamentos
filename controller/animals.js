class Animals {
	constructor(name, gender, breed) {
		this.name = name;
		this.gender = gender;
		this.breed = breed;
	}
	printAnimals() {
		return "<h3>Animal: </h3><br>" +
		`<h4>Name:</h4> ${this.name} <br>` +
		`<h4>Gender:</h4> ${this.gender} <br>` +
		`<h4>Breed:</h4> ${this.breed} `
	}
}
const cat1 = new Animals (
	"zeus", 
	"macho", 
	"persa"
);

function showAnimals() {
	let container = document.querySelector(".container-animal");
	container.innerHTML = `<div class="container"> ${cat1.printAnimals()} </div>`;
}
showAnimals();