
class Product {
  parts:string[] = []
}

interface IBuilder {
  //all methods except the last, which must return the instance must return this, so we can chain method calls(new Builder().buildA().buildB().getInstance())
  buildPartA():this
  buildPartB():this
  buildPartC():this
  getResult(): Product
}

class Builder implements IBuilder {
  // The concrete Builder
  product: Product

  constructor(){
    // fijate en la composición que se da en este patrón
    this.product = new Product()
  }

  buildPartA() {
    this.product.parts.push('a')
    // this hace referencia a la istancia de clase,pero por que es necesaria?
    return this;
  }

  buildPartB() {
    this.product.parts.push('b')
    return this;
  }

  buildPartC() {
    this.product.parts.push('c')
    return this;
  }

  getResult(){
    //see that it will return the composed instance regarding its status,interesesting.Obviously the interface typing the builder class has a method that returns our desired implementation
    return this.product;
  }
}

// The Director
class Director {
  static construct(){
    'Constructs and returns the final product'
    return new Builder()
    .buildPartA()
    .buildPartB()
    .buildPartC()
    .getResult()
  }
}

//last = opposite of first(el último)
//latter = something that happens at the end(al final)
//latest = (más reciente/lo último) usually used in news(the latest news from China, invading us. The chairman was the latest to announce his resignation)


// En el cliente llamariamos a Director,remember this
const PRODUCT1 = Director.construct()
console.log(PRODUCT1.parts)

// NOTA: fijate que puedo crear multiples Directores haciendo cada uno su construcción.Esto no se mencionó y parece super importante