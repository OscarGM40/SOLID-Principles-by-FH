

type CreditCardType = 'visa' | 'mastercard' | 'paypal';

class CreditCardDto {
  constructor(
    private readonly cardtype: CreditCardType,
    private readonly cardCustomerFullName: string, 
    private readonly cardNumber: string, 
    private readonly cardCcv: string, 
    private readonly transactionAmount: number,
  ) { }
}

export { CreditCardDto };