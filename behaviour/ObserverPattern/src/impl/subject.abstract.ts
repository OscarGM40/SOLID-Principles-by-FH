import { Observer } from "./observer.interface";


export abstract class Subject<T> {
  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    /* quizas no haya que comparar objects asi */
    if(!this.observers.some(x => x === observer)) {
      this.observers.push(observer);
    } else {
      throw new Error("Observer already attached");
      
    }
  }

  public detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if(index > -1) {
      this.observers.splice(index, 1);
    } else {
      throw new Error("Observer not attached");
    }
  }

  public notify<T>(message: T): void {
    this.observers.forEach(observer => observer.update(message));
  }
  
}