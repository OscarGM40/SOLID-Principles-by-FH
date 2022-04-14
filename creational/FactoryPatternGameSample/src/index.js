"use strict";
exports.__esModule = true;
var EnemyFactory_1 = require("./factory/EnemyFactory");
var enemyFactory = new EnemyFactory_1["default"]();
for (var _i = 0, _a = Array(5); _i < _a.length; _i++) {
    var x = _a[_i];
    enemyFactory.createEnemy().updateLogic();
}
