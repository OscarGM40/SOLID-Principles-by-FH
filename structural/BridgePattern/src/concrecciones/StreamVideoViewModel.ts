import { IViewModel } from "../abstracciones/ListItemView";


export class StreamViewModel implements IViewModel {
stream: any; //<- stream deberia tener las propiedades necesarias

  constructor(stream: any) {
    this.stream = stream;
  }

  title(): string {
    return `(STREAM) ${this.stream.title} Currently Viewing ${this.stream.viewers}`
  }

  image(): string {
    return `(STREAM) ${this.stream.image}`;
  }
}