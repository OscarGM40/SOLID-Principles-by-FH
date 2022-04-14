import { Entity } from "./Entity.interface";


export default class Boo implements Entity {
  updateLogic(): void {
      console.log('Boo is attacking');
  }
}