interface Bird {
  fly(): void;
  eat(): void;
  run(): void;
}

class Tucan implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
}

class Hummingbird implements Bird {
  public eat() {}
  public fly() {}
  public run() {}
}

class Ostrich implements Bird {
  public eat() {}
  public fly() {}
  public run() {}
}
