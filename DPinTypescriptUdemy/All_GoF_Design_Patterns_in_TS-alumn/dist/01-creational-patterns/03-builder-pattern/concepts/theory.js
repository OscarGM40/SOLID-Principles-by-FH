"use strict";
// The builder pattern is a creational pattern whose intention is to separate the construction of a complex object from its representation so you can use the same construction process to create diferent representations.
/* It tries to solve
 1-  How can a class create different representations of a complex obj?
 2- How can a class that includes creating a complex object be simplified? */
// The Builder and Factory patterns are very similar in the fact they both instantiate new objects at runtime.The difference is when the process of creating the object is more complex,rather than the Factory returning a new instance of ObjectA, a director constructor method will be called ObjectA.construct().It is always static ??
/* TERMINOLOGY
Product: the object being built
Builder Interface: the interface that the ConcreteBuilder should implement
Builder: class that provide methods to build an retrieve the concrete product.Implements the Builder Interface
Director: Has a construct() method that when called creates a customized product using the methods of the Builder(luego es otra clase??)
Client: the client calls the Director
 */
// El patron Builder mejora la legibilidad y mantenibilidad al separar la construccion del objeto complejo.Provee una interfaz fluida que indica claramenete los pasos usados para crear el objeto(esto es cierto, se ve claramente lo que construyes, pues hay que indicarlo xd)
// Flexible configuration: el patrón Builder permite que los parametros del objeto complejos sean indicados en cualquier orden,o incluso omitidos.Esta flexibilidad permite al desarrollador configurar objetos basados en casos de uso especificos sin llenar el constructor de numerosos parametros(claro que si lo llenamos de numerosos métodos en otro lado,asinto)
// Avoidande of 'telescopic constructors' : solo por esto vale la pena.Los constructores telescopicos ocurren cuando una clase tiene multiples constructores con diferentes combinaciones de parametros.El patron Builder evita esto proveyendo de un único constructor y usando encadenamiento de métodos para establecer los parametros opcionales.fijate que lo mejor sería de alguna forma saber que tengo que llamar a ciertos metodos y otros son opcionales en la construcción.Esto no quedó claro como
// se puede usar Abstract Factory para añadir esa abstracciñón entre el cliente y el Director
