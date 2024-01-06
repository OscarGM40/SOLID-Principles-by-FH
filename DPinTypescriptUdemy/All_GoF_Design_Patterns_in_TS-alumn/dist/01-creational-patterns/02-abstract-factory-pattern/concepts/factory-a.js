"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryA = void 0;
class ConcreteProduct {
    constructor() {
        this.name = '';
    }
}
class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'FactoryA: ConcreteProductA';
    }
}
class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'FactoryA: ConcreteProductB';
    }
}
class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'FactoryA: ConcreteProductC';
    }
}
class FactoryA {
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
exports.FactoryA = FactoryA;
