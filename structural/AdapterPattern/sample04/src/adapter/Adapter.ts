import { Adaptee } from "../adaptee/Adaptee";
import { EuropeanSocket } from "../client/Input";

export class EnchufeAdapter implements EuropeanSocket {
  private _adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this._adaptee=adaptee;
  }

  plugin(): void {
      this._adaptee.specificRequest();
  }
  
}