"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_a_1 = require("./factory-a");
const factory_b_1 = require("./factory-b");
class AbstractFactory {
    static createObject(factory) {
        // try {
        if (['aa', 'ab', 'ac'].indexOf(factory) > -1) {
            return factory_a_1.FactoryA.createObject(factory[1]);
        }
        if (['ba', 'bb', 'bc'].indexOf(factory) > -1) {
            return factory_b_1.FactoryB.createObject(factory[1]);
        }
        throw new Error('No factory found');
        /* } catch (e) {
            console.log({ e })
        } */
    }
}
let PRODUCT = AbstractFactory.createObject('ab');
console.log({ PRODUCT });
// ojo con la posibilidad de cambios en caliente, obviamente hay que usar let
PRODUCT = AbstractFactory.createObject('bc');
console.log({ PRODUCT });
