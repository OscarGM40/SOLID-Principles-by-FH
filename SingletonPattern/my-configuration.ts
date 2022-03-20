import config from './config.json';

export default class MyConfiguration {

  private static instance: MyConfiguration;

  private static _connectionString: string;
  private static _environment: string;
  private static _apiUrl: string;

  private constructor() { }

  private static initialize(): void {
    this._connectionString = config.connectionString;
    this._environment = config.environment;
    this._apiUrl = config.apiUrl;
  }

  public static getInstance(): MyConfiguration {
    if (!this.instance) {
      this.instance = new MyConfiguration();
      this.initialize();
    }
    return this.instance;
  }

  get connectionString(): string {
    return MyConfiguration._connectionString;
  }
  get environment(): string {
    return MyConfiguration._environment;
  }
  get apiUrl(): string {
    return MyConfiguration._apiUrl;
  }
  
}