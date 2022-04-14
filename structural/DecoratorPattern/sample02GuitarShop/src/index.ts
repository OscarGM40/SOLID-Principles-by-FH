import { BasePrice } from "./base-price";
import { Customer } from "./customer";
import { SpecialPriceDecorator } from "./decorators/special-price.decorator";
import { VipCustomerDecorator } from "./decorators/vip-customer.decorator";
import { Product } from "./product";



const customer = new Customer('John', true, 'VIP');
const product = new Product('iPhone', 1000);
let discount = new BasePrice();

if(customer.isFirstBuy) {
  discount = new SpecialPriceDecorator(discount);
}

if (customer.type === 'VIP') {
  discount = new VipCustomerDecorator(discount);
}

product.setSpecialPrice(discount.calculate(product.price));

console.log(`${customer.name}'s buying ${product.name} final price will be ${discount.calculate(product.price)}`);

