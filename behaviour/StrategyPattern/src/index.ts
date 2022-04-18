import { Checkout } from "./checkout";
import { MasterCardStrategy } from "./strategies-concrecciones/mastercard.strategy";
import { PayPalStrategy } from "./strategies-concrecciones/paypal.strategy";
import { VisaStrategy } from "./strategies-concrecciones/visa.strategy";


const checkout = new Checkout();

let userId = "usr-001",
  userEmail = "eduardo@manostijeras.com",
  cardNumber = "1234567890123456",
  cvv = "123",
  amount = 2000,
  paymentMethod = 'paypal';

  /* cambio de estrategia en caliente o runtime */
if (paymentMethod === 'paypal') {
  checkout.setStrategy(new PayPalStrategy(userEmail));
}

if(paymentMethod === 'visa') {
  checkout.setStrategy(new VisaStrategy(cardNumber, cvv));
}

if(paymentMethod === 'mastercard') {
  checkout.setStrategy(new MasterCardStrategy(cardNumber, cvv));
}

checkout.execute(userId, amount);