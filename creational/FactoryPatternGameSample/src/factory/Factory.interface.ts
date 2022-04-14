import { Entity } from "../enemies/Entity.interface";

export default interface Factory {
  createEnemy():Entity;
}