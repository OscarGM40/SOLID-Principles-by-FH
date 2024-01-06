// computación distribuida, abstracciones,... son el Way To Go( Liskov principle).Azi puezh creamos la abstracción
export abstract class Vehicle {
  abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {
  constructor(private numberOfSeats: number) {
    // dado que estoy heredando de otra clase,aunque sea abstracta, tengo que llamar al constructor de esa clase(supongo que super() llama a todos los constructores,si heredara de varias llamará a todos)Ojo, si una clase hereda de otra hay que llamar al constructor padre con la keyword pertinente en el constructor de la derivada.Otra razón para usar una interfaz ya que aqui hay otra llamada evitable
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

// fijate que él usó una clase abstracta,pero las interfaces en TS no compilan a JS,y su propósito es tipar,establecer un contrato que es justo lo que queremos.El echo que compilen a 0 bytes las hace mejor que una clase
interface Vehiculo {
  getNumberOfSeats(): number;
}
//recuerda que al usar interfaz no necesitamos llamar al constructor padre
export class Audi implements Vehiculo {
  constructor(private numberOfSeats: number) {}
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Toyota implements Vehiculo {
  constructor(private numberOfSeats: number) {}
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Honda implements Vehiculo {
  constructor(private numberOfSeats: number) {}
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}
//aqui tmb me ha quedado la funcion cerrada para su modificacion,no hay que entrar en el if y definirlo(obviamente hay que entrar en el aray).NOTA: en el array Vehiculo[] estamos usando punteros a clases base y en car.getNumberOfSeats polimorfismo(polimorfismo es que siempre va a llamar al método sobrescrito).En este caso
const cars: (Vehicle | Vehiculo)[] = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(8)];
//ojo con el car.constructor.name para acceder a quien lo construyó
cars.map((car) => console.log(car.constructor.name, car.getNumberOfSeats()));
