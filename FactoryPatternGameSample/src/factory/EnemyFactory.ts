import Boo from "../enemies/Boo";
import Goomba from "../enemies/Goomba";
import Koopa from "../enemies/Koopa";
import Factory from "./Factory.interface";

/* en el momento que quiera encapsular la estrategia de fabricación de los enemigos del juego es donde entra el patrón factory */
/* la factory será la encargada de mantener la lógica de creación de enemigos.Será una clase que pueda reutilizar y usar de forma polimorfíca */
export default class EnemyFactory implements Factory{
  
  public createEnemy(){
    let randomNumber = Math.random();
    let enemy;
    /* fijate que estoy creando un algoritmo para instanciar enemigos */
    if(randomNumber > 0.66){
      enemy = new Koopa();
    }else if(randomNumber > 0.33){
      enemy = new Goomba();
    }else {
      enemy = new Boo();
    }
    return enemy;
  }
}
