import { Damaged, Doped, Goblin, Orc } from "./ConcreteClasses";

let goblin = new Goblin("Goblin 1", 10, 50);
console.log(goblin.attack());
console.log(goblin.defend());
goblin = new Damaged(goblin);
console.log(goblin.attack());
console.log(goblin.defend());

let orc = new Orc("Orc 1", 20, 150);
console.log(orc.attack());
console.log(orc.defend());
orc = new Damaged(orc);
console.log(orc.attack());
console.log(orc.defend());

orc = new Doped(orc);
console.log(orc.attack());
console.log(orc.defend());

