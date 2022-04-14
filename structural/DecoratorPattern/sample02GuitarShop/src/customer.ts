export class Customer {
  constructor(
    public name: string,
    public isFirstBuy: boolean,
    public type:'VIP' | 'NO-VIP'
  ) { }
}