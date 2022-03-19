interface IPhone {
  useLightning(): void;
}

interface Android {
  useMicroUSB(): void;
}


/* tengo dos clases  */

class iPhone7 implements IPhone {
  useLightning() {
    console.log('Using Lightning port to charge iPhone7');
  }
}

class GooglePixel implements Android {
  useMicroUSB() {
    console.log('Using MicroUSB port to charge GooglePixel');
  }
}

/* dado que quiero pasar de iPhone a Android tengo que implementar esa interfaz,pues la otra ya la tengo */
class LightningToMicroUSBAdapter implements Android {
  iphoneDevice: IPhone;

  constructor(private device: IPhone) {
    this.iphoneDevice = device;
  }

  useMicroUSB(): void {
    console.log("want to use micro USB in a iPhone? no problem, I can do it with Lightning");
    this.iphoneDevice.useLightning();
  }
}

let iphone = new iPhone7();
let chargeAdapter = new LightningToMicroUSBAdapter(iphone);
chargeAdapter.useMicroUSB(); // fijate que el patrón simplemente crea una clase arriba de la que no puede realizar la tarea y la pasa al constructor de esta nueva clase que si puede realizarla.Esto implica crear la instancia tanto de la que no puede como de la adaptadora que si puede.