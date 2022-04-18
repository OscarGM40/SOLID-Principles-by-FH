import { PaymentStrategy } from "./payment-strategy";

export interface PaymentCardStrategy extends PaymentStrategy{
    cardNumber: string;
    cvv: string;
}