import { Enemy } from "../abstracciones/Enemy";
import EnemyDecorator from "../abstracciones/EnemyDecorator";

export class HelmetDecorator extends EnemyDecorator {
  /* fijate que tengo acceso a protected enemy pues es la subclase y puedo sobreescribir takeDamage.Ni siquiera usaré protected enemy,con el override me vale */
  takeDamage(): number {
    return this.enemy.takeDamage()/2 ;
  }
}