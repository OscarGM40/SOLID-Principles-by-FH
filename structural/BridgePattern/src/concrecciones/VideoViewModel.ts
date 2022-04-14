import { IViewModel } from "../abstracciones/ListItemView";

export class VideoViewModel implements IViewModel {
  video: any;

  constructor(video: any) {
    this.video = video;
  }

  title(): string {
    return `${this.video.title}`
  }
  
  image(): string {
    return `${this.video.image}`
  }

}