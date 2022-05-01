import { Enemy } from "../abstracciones/Enemy";

export default class BaseEnemy implements Enemy {
  takeDamage(): number {
    return 10;
  }
}