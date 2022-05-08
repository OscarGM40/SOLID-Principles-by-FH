import { Observer } from "./video-observer"

export interface Observable {
  attach(o: Observer):void
  detach(o:Observer):void
  notify():void
}