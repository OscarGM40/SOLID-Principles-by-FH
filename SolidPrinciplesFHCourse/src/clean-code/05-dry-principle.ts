// ni se te ocurra poner | string, pon un valor y no un tipo,como los demas
type Size = "sm" | "m" | "xl" | "";
class Product {
  constructor(public name: string = "", public price: number = 0, public size: Size = "") {}

  isProductReady(): boolean {
    // clave el for key in this y saber que puedo hacer un switch sobre el typeof(esto es importante)Otra forma era con for(const [k,v] of Object.entries(this)).Pero clave es saber que tengo en this todo y que puedo hacer un switch(typeof loquesea)
    for (const key in this) {
      // daba igual mirar el type de la key o del value(con this[key])
      switch (typeof key) {
        case "string":
          if ((this[key] as string).length <= 0) throw Error(`${key} is empty`);
          break;
        case "number":
          if ((this[key] as number) <= 0) throw Error(`${key} is zero`);
        default:
          throw Error(`${typeof key} is not supported`);
      }
    }
    return true; // si llega aqui es que todo fue bien y retornamos un true porque está listo
  }

  toString() {
    // NO DRY <- esto no es el mejor approach,estamos duplicando el throw,el if,etc.. (y por esto la solución del ejercicio tres del tio ese es mejor que la mia,fui muy rápido)
    if (this.name.length <= 0) throw Error("name is empty");
    if (this.price <= 0) throw Error("price is zero");
    if (this.size.length <= 0) throw Error("size is empty");

    this.isProductReady();
    return `${this.name} ${this.price} ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("Pants", 45);
  console.log(bluePants.toString());
})();
