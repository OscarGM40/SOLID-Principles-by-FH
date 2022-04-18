
export interface PaymentStrategy {
    execute(userId: string,amount: number): PaymentResponse;
  }

export interface PaymentResponse {
  isSuccess: boolean;
  errorMessage?: string;
}
