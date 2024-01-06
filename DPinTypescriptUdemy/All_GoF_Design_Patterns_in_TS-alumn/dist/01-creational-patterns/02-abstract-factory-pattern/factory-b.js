"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryB = void 0;
//fijate que estas clases están a nivel de modulo asi que puedo llamarlas igual
class ConcreteProduct {
    constructor() {
        this.name = '';
    }
}
class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'FactoryB: ConcreteProductA';
    }
}
class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'FactoryB: ConcreteProductB';
    }
}
class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'FactoryB: ConcreteProductC';
    }
}
class FactoryB {
    static createObject(prop) {
        if (prop === 'a') {
            return new ConcreteProductA();
        }
        else if (prop === 'b') {
            return new ConcreteProductB();
        }
        else {
            return new ConcreteProductC();
        }
    }
}
exports.FactoryB = FactoryB;
