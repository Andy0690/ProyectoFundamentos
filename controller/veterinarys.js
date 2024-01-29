class Veterinarys {
  constructor(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
  }
  printVeterinarys() {
    return "<h3>Veterinary: </h3><br>" + 
    `<h4>Name:</h4> ${this.name} <br>` +
    `<h4>Address:</h4> ${this.address} <br>` +
    `<h4>Phone:</h4> ${this.phone}`
  }
}

  const Veterinary1 = new Veterinarys(
    "Friendly Pets",
    "Kr 26 sur 35",
    3108274555
  );

function showVeterinarys() {
  let container = document.querySelector(".container-veterinary");
  container.innerHTML = `<div class="container"> ${Veterinary1.printVeterinarys()} </div>`;
}
showVeterinarys();