import ArmourDecorator from "./decoradores/ArmourDecorator";
import { HelmetDecorator } from "./decoradores/HelmetDecorator";
import BaseEnemy from "./implementaciones/BaseEnemy";

let enemy = new BaseEnemy();
let enemyWithHelmet = new HelmetDecorator(enemy);
let enemyWithArmour = new ArmourDecorator(enemyWithHelmet);

/* fijate que lo que quiero es decorar la función takeDamage.Esto es la base de todo */
let computedDamaged = enemyWithArmour.takeDamage();
console.log(computedDamaged);