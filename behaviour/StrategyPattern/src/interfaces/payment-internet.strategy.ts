import { PaymentStrategy } from "./payment-strategy";


export interface PaymentInternet extends PaymentStrategy {
  userEmail: string;
}