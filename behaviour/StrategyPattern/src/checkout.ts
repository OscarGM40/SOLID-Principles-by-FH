import { PaymentResponse, PaymentStrategy } from "./interfaces/payment-strategy";


export class Checkout {
  /* propiedad de tipo Strategia Base para polimorfismo */
  private context?: PaymentStrategy;

  /* es para cambiar en runtime?? */
  public setStrategy(context: PaymentStrategy): void {
    this.context = context;
  }

  /* polimorfismo detected.Fijate que el método podria llamarse diferente incluso */
  public execute(userId: string, amount: number): PaymentResponse {
    if(!this.context) {
      throw new Error("No strategy has been set");
    }
    return this.context.execute(userId, amount);
  }
}