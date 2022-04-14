import IPaymentMethod from "../../src/payment-method.interface";

export default class PayPal implements IPaymentMethod {
  get comission(): number {
    return 0.05;
  }
}