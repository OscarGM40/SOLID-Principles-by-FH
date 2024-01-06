"use strict";
class MyClass {
    constructor(field) {
        this.field = field;
    }
    clone() {
        return Object.assign({}, this); // Object.assign hace una shallow,ojo
        // return JSON.parse(JSON.stringify(this)) // si quisiera una deep copy puedo usar este tip
    }
}
// the client
const obj1Prototype = new MyClass([1, 2, 3, 4]);
console.log(`OBJECT1: ${JSON.stringify(obj1Prototype)}`);
const obj2Prototype = obj1Prototype.clone();
// recall what makes clone method, either a shallow or a deep copy
obj2Prototype.field[1] = 101;
console.log(`OBJECT2: ${JSON.stringify(obj2Prototype)}`);
console.log(`OBJECT1: ${JSON.stringify(obj1Prototype)}`);
