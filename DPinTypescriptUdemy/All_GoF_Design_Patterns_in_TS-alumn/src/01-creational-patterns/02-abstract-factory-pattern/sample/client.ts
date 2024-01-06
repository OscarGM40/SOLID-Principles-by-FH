import FurnitureFactory from "./furniture-factory";

// it is highly possible that I must use optional chain operators with this pattern from the client
let Furniture = FurnitureFactory.getFurniture('Medium Table');
console.log(Furniture?.getDimensions());

Furniture = FurnitureFactory.getFurniture('Small Chair')
console.log(Furniture?.getDimensions());

