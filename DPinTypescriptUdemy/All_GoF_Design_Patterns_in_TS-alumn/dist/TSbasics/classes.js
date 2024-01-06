"use strict";
// classes are a template when creating custom objects
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
class Cat {
    constructor(name) {
        // en el modo strict,que siempre estará a true tengo que asignar el valor de cualquier campo de clase, o bien en el constructor(que esto en resumen es que se lo daré al crear la instancia) o si no hago esto le tengo que dar un valor
        this.stepsWalked = 0;
        this.name = name;
        // si dijera que stepsWalked lo voy a dar valor en la instanciación no necesitaba darle un valor arriba(con strict a true)
    }
    ;
    walk(steps) {
        console.log(`${this.name} has walked ${steps} in direction to the carpet`);
        this.stepsWalked += steps;
    }
    ;
    totalStepCount() {
        return this.stepsWalked;
    }
}
exports.Cat = Cat;
