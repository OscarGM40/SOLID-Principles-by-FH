export interface IProductA {
    name: string
}

class ConcreteProduct implements IProductA {
    name = ''
}

class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryA: ConcreteProductA'
    }
}

class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryA: ConcreteProductB'
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryA: ConcreteProductC'
    }
}

export class FactoryA {
    static createObject(prop: string): IProductA {
        if (prop === 'a') {
            return new ConcreteProductA()
        } else if (prop === 'b') {
            return new ConcreteProductB()
        } else {
            return new ConcreteProductC()
        }
    }
}
