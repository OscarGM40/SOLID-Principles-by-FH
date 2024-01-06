// el cliente quiere un objeto cualquiera.En vez de crearlo en el cliente,lo pediŕa al creator(la factoria)
// La factoria encontrará la clase usando algun tipo de lógica en los argumentos de la request.Con esa lógica pedirá a la subclase concreta que instancie el objeto que devolverá como referencia al cliente.Superinteresante

// creamos la Interface con el contrato de como luce ese objeto
interface IProduct {
  name: string;
}

//esta es la superclase
class ConcreteProduct implements IProduct {
  name='';
}
// debo definir todos los tipos de productos posibles para cambiarlos on demand
class ConcreteProductA extends ConcreteProduct {
  constructor(){
    super();
    this.name = 'ConcreteProductA'
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor(){
    super();
    this.name = 'ConcreteProductB'
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor(){
    super();
    this.name = 'ConcreteProductC'
  }
}
// este es el creator,que tendrá el factory method
class Creator {
  // fijate en la sustitucion de Liskov
  static createObjectOnDemand(someProperty:string): IProduct {
    if(someProperty === 'a'){
      return new ConcreteProductA()
    } else if (someProperty === 'b'){
      return new ConcreteProductB();
    } else {
      // fijate en la posibilidad de retornar un objeto concreto por defecto
      return new ConcreteProductC()
    }
  }
}

//el cliente solo tiene que llamar a esa clase con la demanda que quiera => fijate además que la instanciación se retrasa hasta esta linea
const Product_required_by_client = Creator.createObjectOnDemand('b');
console.log(Product_required_by_client.name)