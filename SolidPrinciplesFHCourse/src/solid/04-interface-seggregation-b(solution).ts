// Los clientes no deberían estar obligados a depender de interfaces que no necesitan

interface IBird {
  fly(): void;
  eat(): void;
}

interface CanRun {
  run(): void;
}

interface CanSwim {
  swim(): void;
}

class ITucan implements IBird, CanRun {
  fly(): void {}
  eat(): void {}
  run(): void {}
}

class IHummingbird implements IBird {
  fly(): void {}
  eat(): void {}
}

class IOstrich implements IBird, CanRun, CanSwim {
  fly(): void {}
  eat(): void {}
  run(): void {}
  swim(): void {}
}
