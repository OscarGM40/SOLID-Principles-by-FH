import { Entity } from "./Entity.interface";

export default class implements Entity {
  updateLogic(): void {
      console.log('koopa is attacking');
  }
}