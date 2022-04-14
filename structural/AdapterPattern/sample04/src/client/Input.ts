export interface EuropeanSocket {
  plugin():void;
}


class EnchufeEspañol implements EuropeanSocket {
  plugin():void {
    console.log('Este enchufe requiere una toma de dos orificios');
  }
}