import EnemyDecorator from "../abstracciones/EnemyDecorator";

export default class ArmourDecorator extends EnemyDecorator {
  takeDamage(): number {
    return this.enemy.takeDamage() / 3;
  }
}