import IPaymentMethod from "../../src/payment-method.interface";

export default class MasterCard implements IPaymentMethod {
  get comission(): number {
    return 0.04;
  }
}