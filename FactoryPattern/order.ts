import PaymentType from "./enums/payment-type";
import MasterCard from "./factory/types/MasterCard";
import Visa from "./factory/types/Visa";
import PaymentMethodFactory from "./src/payment-method-factory";
import IPaymentMethod from "./src/payment-method.interface";


export default class Order {
  /* fijate en la abstración para la implementacion de cualquier clase */
  public paymentType?: IPaymentMethod;
  public comission: number = 0;

  constructor(
    private type: PaymentType,
    public amount: number) { }

  public create(): void {
    this.paymentType = PaymentMethodFactory.createPaymentType(this.type);
    this.comission = this.paymentType.comission * this.amount;
  }
}