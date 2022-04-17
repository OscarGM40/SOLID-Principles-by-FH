import { Observer } from "../impl/observer.interface";
import { Order } from "../shopping-cart";


export class EmailObserver implements Observer {
  update(subject: Order): void {
    console.log(`Email: Your order ${subject.id} has been shipped`);
  }
}