"use strict";
// I can extend any existing class by using the keyword 'extends' in another class.This subclass will have everything from the extending class but it also can develop its own constructor, methods and properties
//Extending a clas copies the base class template and allows me to refine or specialize it further
//The derived class can override the constructor and by using the super keyword send some properties to the superclass constructor
//Also if the superclass implements any interface the subclass must satisfies that interface
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    feed(food, amount) {
        console.log('Feeding ' +
            this.name +
            ' the ' +
            this.constructor.name +
            ' ' +
            amount +
            ' kg of ' +
            food);
    }
}
class CatC extends Animal {
    constructor(name, age, isHungry) {
        // name y age irán para el constructor de Animal, isHungry para éste
        super(name, age);
        this.isHungry = isHungry;
    }
    // fijate que aqui hay override de métodos, si lo implemento en la subclase llama a ese, sino al del padre.Esto se puede hacer incluso condicionalmente.Ojo,que no habia visto que puedo usar super.feed() para llamar a un método padre,interesante
    feed(food, amount) {
        if (this.isHungry) {
            super.feed(food, amount);
        }
        else {
            console.log(this.name + ' the ' + this.constructor.name + ' is not hungry');
        }
    }
}
class Dog extends Animal {
}
const CAT = new CatC('Cosmo', 8, false);
const DOG = new Dog('Rusty', 12);
CAT.feed('Fish', 0.1);
DOG.feed('Beef', 0.25);
