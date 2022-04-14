import { CulquiCommand } from "./payment-commands/culqui.command";
import { CreditCardDto } from "./payment-commands/dto/credit-card.dto";
import { MercadoPagoCommand } from "./payment-commands/mercadopago.command";
import { PaypalCommand } from "./payment-commands/paypal.command";
import { PaymentMethodHandler } from "./payment-method.handler";


const creditCard = new CreditCardDto(
  'visa',
  'John Doe',
  '1234567890123456',
  '123',
  100,
)
/* clase que llamaba a process(command:ICommand) */
const paymentMethodHandler = new PaymentMethodHandler();

/* fijate en la doble composición,process necesita dos objectos,ojo */
paymentMethodHandler.process( new CulquiCommand(creditCard) );

paymentMethodHandler.forceToProcess([
  new CulquiCommand(creditCard),
  new PaypalCommand(creditCard),
  new MercadoPagoCommand(creditCard),
])

