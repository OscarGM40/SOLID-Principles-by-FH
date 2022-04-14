import PaymentType from "../enums/payment-type";
import MasterCard from "../factory/types/MasterCard";
import IPaymentMethod from "./payment-method.interface";
import Visa from '../factory/types/Visa';
import PayPal from "../factory/types/PayPal";

export default class PaymentMethodFactory {
  public static createPaymentType(type: PaymentType): IPaymentMethod {
    if (type === PaymentType.MasterCard) {
      return new MasterCard();
    }
    if (type === PaymentType.Visa) {
      return new Visa();
    }
    if (type === PaymentType.PayPal) {
      return new PayPal();
    }
    throw new Error("Payment type not found");
  }
}