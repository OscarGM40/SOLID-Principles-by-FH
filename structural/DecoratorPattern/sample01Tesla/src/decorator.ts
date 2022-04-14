abstract class Car {
  public description: string;

  constructor(description: string) {
    this.description = description;
  }

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

class ModelS extends Car{
  public description = "Model S";

  public cost(): number {
    return 73000;
  }
}

class ModelX extends Car{
  public description = "Model S";

  public cost(): number {
    return 77000;
  }
}

abstract class CarOptions extends Car {
  decoratedCar: Car;
  description: string;
  
  constructor(car: Car,description: string) {
    super(description);
    this.decoratedCar = car;
    this.description = description;
  }
  public abstract getDescription(): string;
  public abstract cost(): number;
}

class EnhancedAutoPilot extends CarOptions {
  decoratedCar: Car;
  description: string;
  
  constructor(car: Car,description: string){
    super(car,description);
    this.decoratedCar = car;
    this.description = description;
  }
  
  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", EnhancedAutoPilot";
  }
  public cost(): number {
    return this.decoratedCar.cost() + 15000;
  }
}

class RearFacingSeats extends CarOptions {
  decoratedCar: Car;
  description: string;
  
  constructor(car: Car,description: string){
    super(car,description);
    this.decoratedCar = car;
    this.description = description;
  }
  
  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", RearFacingSeats";
  }
  public cost(): number {
    return this.decoratedCar.cost() + 14000;
  }
}

let myTesla = new ModelS("Tesla S original");
myTesla = new RearFacingSeats(myTesla,"Model S with Seats");
myTesla = new EnhancedAutoPilot(myTesla,"");

console.log(myTesla.cost());
console.log(myTesla.getDescription());