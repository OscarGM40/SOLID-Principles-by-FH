"use strict";
// interfaces are used to ensure a class fullfills any requeriments we want from it.Specially useful when working with other devs.They require the keyword 'implements'
class CatB {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    feed(food, amount) {
    }
}
