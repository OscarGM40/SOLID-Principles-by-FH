// Abstract classes are like a mixture of implementing interfaces and extending a class in one step. You can create a class with optional methods and properties, but also indicate which methods and properties must be implemented in the derived class. Note that your base class, despite enforcing abstract rules, is still able to itself implement any interfaces you desire.

// Use the abstract keyword to indicate a class contains abstract methods or properties.

// In this first example, the abstract class Animal has an abstract property name. Cat and Dog must implement the property name themselves rather than inherit from the base class.

// Note that the abstract name in the Animal class definition cannot be initialized a value in either the class attribute definition or in its constructor. It is now a rule indicating that name must be initialized by the derived class instead.

abstract class AnimalABS {
  // en cuanto ponga una propiedad o método abstracto debo poner la clase abstracta.Recuerda que esta palabra indica que la responsabilidad de instanciar la prop o método será de la subclase
    abstract name: string
    age: number

    constructor(age: number) {
        // this responsibility is now in the derived class
        // this.name=name
        this.age = age
    }
    feed(food: string, amount: number): void {
        console.log(
            'Feeding ' +
                this.name +
                ' the ' +
                this.constructor.name +
                ' ' +
                amount +
                ' kg of ' +
                food
        )
    }
}

class CatABS extends AnimalABS {
    name: string
    constructor(name: string, age: number) {
        super(age)
        this.name = name
    }
}

class DogABS extends AnimalABS {
    name: string
    constructor(name: string, age: number) {
        super(age)
        this.name = name
    }
}

// en Javascript desaparece la palabra abstract, es solo para TS