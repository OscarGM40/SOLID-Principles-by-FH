"use strict";
// https://sbcode.net/typescript/factory/
// when developing code I may instantiate objects directly in methods or in classes.While this is quite normal, I may want to add an extra abstraction between the creation of the object and where is is used in my project
//I can use the FACTORY pattern to ad that extra abstraction. The factory pattern is one of the easiest patterns to understand and implement
// Adding an extra abstraction will also allow me to dynamically choose classes to instantiate based on some kond of logic
// Before that abstraction, my client, class or method would directly instantiate an object of a class.After adding the factory abstraction, the concrete product(that object?) is now created outside the current class/method and now in a subclass instead
//Imagine an application for designing houses and the house has a chair already aded on the floor by default. By adding the factory pattern, I could give the option to the user to choose different charis, and how many at runtime.Instead of the chair being hardcoded into the project when it started, the user now has the option to choose
// Adding this extra abstraction also means that the complications of instantiating extra objects can now be hidden from the class or method that is using it.This separation also makes my code easier to read and document
// The FACTORY pattern is really about adding this extra abstraction between the object creation and where it is used.This give me extra options that I can more easily extend in the future(so it is a begin as well)
// TERMINOLOGY
// Concrete Creator: The client application(la aplicacion), class or method that calls the creator(Factory method).Entiendo que el concrete creator es el factory method
// Product Interface: the interface describing the attributes and methods that the Factory will require in orde to create the final product/object/instance
// Creator: the Factory class. Declares the Factory method that will return the object requested from it
// Concrete Product. The object returned from the factory. The object implements the Product Interface
// repasar SOLID course de FH
// fijate que la abstracion es que el cliente no crea la instancia, sino que la crea el método estático de la clase creadora
//recuerda que las complicaciones de la instanciacion estan localizadas en cada subclase
