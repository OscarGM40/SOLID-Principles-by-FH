"use strict";
exports.__esModule = true;
var Boo_1 = require("../enemies/Boo");
var Goomba_1 = require("../enemies/Goomba");
var Koopa_1 = require("../enemies/Koopa");
/* en el momento que quiera encapsular la estrategia de fabricación de los enemigos del juego es donde entra el patrón factory */
/* la factory será la encargada de mantener la lógica de creación de enemigos.Será una clase que pueda reutilizar y usar de forma polimorfíca */
var EnemyFactory = /** @class */ (function () {
    function EnemyFactory() {
    }
    EnemyFactory.prototype.createEnemy = function () {
        var randomNumber = Math.random();
        var enemy;
        /* fijate que estoy creando un algoritmo para instanciar enemigos */
        if (randomNumber > 0.66) {
            enemy = new Koopa_1["default"]();
        }
        else if (randomNumber > 0.33) {
            enemy = new Goomba_1["default"]();
        }
        else {
            enemy = new Boo_1["default"]();
        }
        return enemy;
    };
    return EnemyFactory;
}());
exports["default"] = EnemyFactory;
