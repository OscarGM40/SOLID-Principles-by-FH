import { FactoryA, IProductA } from './factory-a'
import { FactoryB, IProductB } from './factory-b'

// ojo con esta linea que es crucial para usar Liskov
interface IProduct extends IProductA, IProductB {}

class AbstractFactory {
    static createObject(factory: string): IProduct | Error {
        // try {
        if (['aa', 'ab', 'ac'].indexOf(factory) > -1) {
            return FactoryA.createObject(factory[1])
        }
        if (['ba', 'bb', 'bc'].indexOf(factory) > -1) {
            return FactoryB.createObject(factory[1])
        }
        throw new Error('No factory found')
        /* } catch (e) {
            console.log({ e })
        } */
    }
}

let PRODUCT = AbstractFactory.createObject('ab');
console.log({PRODUCT})
// ojo con la posibilidad de cambios en caliente, obviamente hay que usar let
PRODUCT = AbstractFactory.createObject('bc');
console.log({PRODUCT})