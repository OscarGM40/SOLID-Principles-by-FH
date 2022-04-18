import { PaymentInternet } from "../interfaces/payment-internet.strategy";
import { PaymentResponse } from "../interfaces/payment-strategy";


export class PayPalStrategy implements PaymentInternet {
  constructor(public userEmail: string) { }

  execute(userId: string, amount: number): PaymentResponse {
    console.log("The user has paid " + amount + " using PayPal");
    return { isSuccess: true }
  }
}