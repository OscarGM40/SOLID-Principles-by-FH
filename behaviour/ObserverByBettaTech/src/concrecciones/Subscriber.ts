import { Observable } from "../abstracciones/video-observable";
import { Observer } from "../abstracciones/video-observer";
import { YoutubeChannel } from "./YoutubeChannel";


export class Subscriber implements Observer {
  private observable: Observable;

  constructor(o: Observable){
    this.observable = o;
    // this.observable.attach(this); //mejor a mano
  }
  update(): void {
    console.log("New video posted!!");
    console.log((this.observable as YoutubeChannel)._lastVideoPosted);
  }
}