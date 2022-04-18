import { PaymentCardStrategy } from "../interfaces/payment-card-strategy";
import { PaymentResponse } from "../interfaces/payment-strategy";


export class VisaStrategy implements PaymentCardStrategy {
  constructor(public cardNumber: string, public cvv: string) { }
  
  execute(userId: string, amount: number): PaymentResponse {
    console.log("The user has paid " + amount + " using Visa");
    return { isSuccess: true }
  }
}