import { BaseEnemyDecorated, BaseEnemy } from './abstractions/baseEnemy';

export class Goblin extends BaseEnemy {
/*   public name: string = 'Goblin';
  public power: number = 10;
  public life: number = 50; */
  
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
  }

  public attack(): number {
    return this.power;
  }
  public defend(): number {
    return this.life;
  }
}

export class Orc extends BaseEnemy {
/*   public name: string = 'Orc';
  public power: number = 20;
  public life: number = 150; */
  
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
  }

  public attack(): number {
    return this.power;
  }
  public defend(): number {
    return this.life;
  }
}


export class Damaged extends BaseEnemyDecorated {
  decoratedEnemy: BaseEnemy;
  
  constructor(enemy: BaseEnemy) {
    super(enemy);
    this.decoratedEnemy = enemy;
  }
  public attack(): number {
    return this.decoratedEnemy.getPower() * 0.75;
  }
  public defend(): number {
    return this.decoratedEnemy.getLife() * 0.75;
  }
}

export class Doped extends BaseEnemyDecorated {
  
  decoratedEnemy: BaseEnemy;
  
  constructor(enemy: BaseEnemy) {
    super(enemy);
    this.decoratedEnemy = enemy;
  }
  public attack(): number {
    return this.decoratedEnemy.getPower() * 1.25;
  }
  public defend(): number {
    return this.decoratedEnemy.getLife() * 1.25;
  }
}

