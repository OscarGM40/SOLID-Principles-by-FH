// All the parts of a class, such as the properties, constructor and methods are called members. When you instantiate a class, e.g,

// const CAT = new Cat()

// You are creating a new object in memory with its own copies of all the members of the Cat class.

// E.g, I can create two independent objects using the Cat class.

// const CAT1 = new Cat()
// const CAT2 = new Cat()

// They would then have their own copies of the members independently of each other. So, if the Cat class described a name property and/or walk method, then calling CAT1's properties, constructor and methods would return a different result than calling CAT2's properties, constructor and methods. Both objects are independent in memory but were both created from the same class template.

class ClassWithProperty {
    abc = 123
}

class ClassWithStaticProperty {
    static abc = 123
}
// si creara 10 instancias de esta clase se crearán 10 punteros al método(objeto) en memoria
class ClassWithMethod {
    method() {
        return 123
    }
}
// si instancio 10 veces esta clase solo se creará un objeto en memoria.Esto puede ser importante en términos de performance
class ClassWithStaticMethod {
    static method() {
        return 123
    }
}

const CLASS_A = new ClassWithProperty()
console.log(CLASS_A.abc)

const CLASS_B = new ClassWithStaticProperty()
// console.log(CLASS_B.abc); // undefined. 'abc' does not
// exist on CLASS_B instance.
// You must reference it via the class name instead
console.log(ClassWithStaticProperty.abc)
// fijate que para acceder a una propiedad estática no necesito ni instanciar la clase(aunque si que tendré que exportarla seguramente)

const CLASS_C = new ClassWithMethod()
console.log(CLASS_C.method())

const CLASS_D = new ClassWithStaticMethod()
// console.log(CLASS_D.method()); //error. CLASS_D.method is
// not a function.
// You must reference it via the class name instead
console.log(ClassWithStaticMethod.method())
// lo mismo para acceder a un método estático,solo necesito acceso a la declaración de la clase via import/export


class Circle {
    radius: number
    static PI = 3.14

    constructor(radius: number) {
        this.radius = radius
    }
}

console.log('Circle.PI = ' + Circle.PI)

const CIRCLE1 = new Circle(1)
const CIRCLE2 = new Circle(2)
const CIRCLE3 = new Circle(3)
// aqui estamos accediendo al mismo lugar en la memoria
console.log('CIRCLE1 Area = ' + Circle.PI * CIRCLE1.radius ** 2)
console.log('CIRCLE2 Area = ' + Circle.PI * CIRCLE2.radius ** 2)
console.log('CIRCLE3 Area = ' + Circle.PI * CIRCLE3.radius ** 2)