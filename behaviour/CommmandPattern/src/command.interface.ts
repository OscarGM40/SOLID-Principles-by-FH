/* fijate que ICommand puede bajar a los tres comandos */
export interface ICommand {
  providerName: string;
  handle(): void;
}