import { Entity } from "./Entity.interface";


export default class Goomba implements Entity {
  updateLogic(): void {
      console.log('Goomba is attacking');
  }
}