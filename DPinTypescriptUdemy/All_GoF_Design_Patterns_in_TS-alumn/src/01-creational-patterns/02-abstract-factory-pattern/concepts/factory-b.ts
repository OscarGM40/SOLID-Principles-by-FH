export interface IProductB {
    name: string
}
//fijate que estas clases están a nivel de modulo asi que puedo llamarlas igual
class ConcreteProduct implements IProductB {
    name = ''
}

class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryB: ConcreteProductA'
    }
}

class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryB: ConcreteProductB'
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryB: ConcreteProductC'
    }
}

export class FactoryB {
    static createObject(prop: string): IProductB {
        if (prop === 'a') {
            return new ConcreteProductA()
        } else if (prop === 'b') {
            return new ConcreteProductB()
        } else {
            return new ConcreteProductC()
        }
    }
}
