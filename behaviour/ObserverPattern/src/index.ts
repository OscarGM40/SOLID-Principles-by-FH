import { EmailObserver } from "./observers/email.observer";
import { SmsObserver } from "./observers/sms.observer";
import { CartItem, Order, ShoppingCart } from "./shopping-cart";



/* Observers */
const smsObserver = new SmsObserver();
const emailObserver = new EmailObserver();

/* Subject o Emitter */
const shoppingCart = new ShoppingCart(1, "John");

shoppingCart.attach(smsObserver);
shoppingCart.attach(emailObserver);

shoppingCart.add(new CartItem(1,"Electric Guitar",1,2800));
shoppingCart.add(new CartItem(2,"Amp 60w Fender",1,1400));
shoppingCart.add(new CartItem(3,"Addario Strings",1,0.75));

shoppingCart.purchase();