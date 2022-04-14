import { IDiscount } from "./interfaces/discount.interface";

/* fijate que la clase principal herede de la abstracción,igual que los decoradores,que implementarán la misma abstracción */
export class BasePrice implements IDiscount {
  calculate(input:number):number {
    console.log(`${this.constructor.name} discount applied`);
    return input;
  }
}