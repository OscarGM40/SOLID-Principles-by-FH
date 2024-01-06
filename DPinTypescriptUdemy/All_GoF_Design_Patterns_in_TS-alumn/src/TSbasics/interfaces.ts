// interfaces are used to ensure a class fullfills any requeriments we want from it.Specially useful when working with other devs.They require the keyword 'implements'

interface IAnimal {
    name: string
    age: number
    feed(food:string, amount:number):void
}

class CatB implements IAnimal {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    feed(food: string, amount: number): void {
        
    }
}
