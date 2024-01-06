// The Set object(in Javascript will be an object upon compiling) lets me store unique values of any type.Any duplicated item added to the Set won't be added, just ignored

// para instanciarlo tengo que usar new Set(values)
let setA: Set<number>;
setA = new Set([1,2,3,4,4]);

// puedo definir el genérico como unknown para que acepte cualquier cosa
let setB: Set<unknown>;
setB = new Set([1,'b',true])

//fijate que no exponen ninguna forma de acceder a un specific item
console.log(setB)

// asi que puedo convertirlo a Array e indexarlo
console.log(Array.from(setB)[0])

//usaré Sets en los patrones Mediator,Memento y Observer

