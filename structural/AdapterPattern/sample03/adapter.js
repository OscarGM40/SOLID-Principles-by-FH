/* tengo dos clases  */
var iPhone7 = /** @class */ (function () {
    function iPhone7() {
    }
    iPhone7.prototype.useLightning = function () {
        console.log('Using Lightning port to charge iPhone7');
    };
    return iPhone7;
}());
var GooglePixel = /** @class */ (function () {
    function GooglePixel() {
    }
    GooglePixel.prototype.useMicroUSB = function () {
        console.log('Using MicroUSB port to charge GooglePixel');
    };
    return GooglePixel;
}());
/* dado que quiero pasar de iPhone a Android tengo que implementar esa interfaz,pues la otra ya la tengo */
var LightningToMicroUSBAdapter = /** @class */ (function () {
    function LightningToMicroUSBAdapter(device) {
        this.device = device;
        this.iphoneDevice = device;
    }
    LightningToMicroUSBAdapter.prototype.useMicroUSB = function () {
        console.log("want to use micro USB in a iPhone? no problem, I can do it with Lightning");
        this.iphoneDevice.useLightning();
    };
    return LightningToMicroUSBAdapter;
}());
var iphone = new iPhone7();
var chargeAdapter = new LightningToMicroUSBAdapter(iphone);
chargeAdapter.useMicroUSB(); // fijate que el patrón simplemente crea una clase arriba de la que no puede realizar la tarea y la pasa al constructor de esta nueva clase que si puede realizarla.Esto implica crear la instancia tanto de la que no puede como de la adaptadora que si puede.
