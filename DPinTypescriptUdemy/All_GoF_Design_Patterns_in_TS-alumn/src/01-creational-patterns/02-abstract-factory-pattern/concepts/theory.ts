// https://sbcode.net/typescript/abstract_factory/
// The Abstract Factory Pattern adds an abstraction layer over multiple other creational pattern implementations
// To begin with, I can think as a Factory that can return Factories(instead of instancies).Although I will encounter examples of it also being used to return Builder, Prototypes, Singleton or other design patterns

// TERMINOLOGY
// Client: the client application that calls the Abstract Factory.It is the same process as the Concrete Creator in the Factory pattern
// Abstract Factory: a common interface over all the sub factories
// Concrete Factory: The sub factory of the Abstract Factory which contains methods to allow creating the Concrete Product
// Abstract Product: the interface and/or abstraction for the product that the sub factory returns
// Concrete Product: the object that is finally returned
