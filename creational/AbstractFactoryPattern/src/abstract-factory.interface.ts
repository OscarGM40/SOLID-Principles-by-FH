import IConnector from "./factories/connector.interface";
import IPublisher from "./factories/publisher.interface";

/* fijate que solo trabajaré con interfaces */
/* esta interfaz es la fábrica de fábricas */
export default interface IAbstractFactory {
  getConnector(): IConnector;
  getPublisher(connector: IConnector): IPublisher;
}