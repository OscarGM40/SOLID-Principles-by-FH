export abstract class BaseEnemy {
  public name: string;
  public power: number;
  public life: number;

  constructor(name: string, power: number, life: number) {
    this.name = name;
    this.power = power;
    this.life = life;
  }
  public getName(): string {
    return this.name;
  }
  public getPower(): number {
    return this.power;
  }
  public getLife(): number {
    return this.life;
  }
  public abstract attack(force: number): number;
  public abstract defend(incomingAttack: number): number;
}

export abstract class BaseEnemyDecorated extends BaseEnemy {
  decoratedEnemy: BaseEnemy;

  constructor(enemy: BaseEnemy) {
    super(enemy.getName(), enemy.getPower(), enemy.getLife());
    this.decoratedEnemy = enemy;
  }

   public abstract attack(force: number): number;
  public abstract defend(incomingAttack: number): number;

}