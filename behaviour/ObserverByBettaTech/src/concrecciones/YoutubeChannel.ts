import { Observable } from "../abstracciones/video-observable";
import { Observer } from "../abstracciones/video-observer";

export class YoutubeChannel implements Observable {
  /* el Observable necesita tener un listado de suscriptores.Un array */
  private channelSubscribers: Observer[] = [];
  private lastVideoPosted: string = "";

  attach(o: Observer): void {
    this.channelSubscribers.push(o);
  }
  detach(o: Observer): void {
    this.channelSubscribers = this.channelSubscribers.filter(
      (subscriber) => subscriber !== o
    );
  }
  notify(): void {
    this.channelSubscribers.forEach((subscriber) => subscriber.update());
  }
  addNewVideo(videoTitle: string): void {
    this.lastVideoPosted = videoTitle;
    this.notify();
  }
  get _lastVideoPosted(): string {
    return this.lastVideoPosted;
  }
}
