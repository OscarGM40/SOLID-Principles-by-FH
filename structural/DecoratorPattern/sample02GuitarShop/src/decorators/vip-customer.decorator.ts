import { IDiscount } from "../interfaces/discount.interface";



export class VipCustomerDecorator implements IDiscount {
  constructor(private readonly decorator: IDiscount) { }

  private readonly discountAmount: number = 0.02;

  calculate(input: number): number {
    console.log(`${this.constructor.name} is calculating the discount`);
    return this.decorator.calculate(input) - this.discountAmount * input;
  }
}