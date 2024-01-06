"use strict";
// https://sbcode.net/typescript/prototype/
/* The Prototype design pattern is good for when creating new objects requires more resources than you wnat to use or have available.You can save resources by just creating a copy of any existing object that is already in memory */
/* E.g., A file you've downloaded form a server may be large, but since it is already in memory,you could just clone it, and work on the new copy independently of the original   */
/* In the Prototype pattern inteface I must create a clone method that should be implemented by all classes that use the interface.How the clone method is implemented in the concrete class is up to you.You will need to decide whether to do a shallow or a deep copy */
/* In JavaScript I have mutable objects such as Arrays,Dictionaries,Sets and any custom object.A shallow copy will create new copies of the objects with new references in memory,but the underlying data,the elements inside the object are passed by reference, thus changing in one obj will mutate all objs,that is, changing values in the copy will affect the original.Be sure to test your impl and ensure that works as you expect */
/* TERMINOLOGY:
Prototype interface: the interface that describes the clone() method
Prototype: The object/Product that implements the Prototype interface
Client: The client application that uses and creates the Prototype
*/ 
