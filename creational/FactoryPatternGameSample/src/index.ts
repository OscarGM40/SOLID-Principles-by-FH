import EnemyFactory from "./factory/EnemyFactory";

const enemyFactory = new EnemyFactory();
for(const x of Array(5)) {
  enemyFactory.createEnemy().updateLogic();
}