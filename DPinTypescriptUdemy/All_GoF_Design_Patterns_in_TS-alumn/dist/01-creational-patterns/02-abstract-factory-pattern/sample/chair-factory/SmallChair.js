"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConcreteChair_1 = require("./ConcreteChair");
class AFSmallChair extends ConcreteChair_1.AFChair {
    constructor() {
        super(AFSmallChair.height, AFSmallChair.width, AFSmallChair.depth, AFSmallChair.chairName);
    }
}
exports.default = AFSmallChair;
AFSmallChair.height = 40;
AFSmallChair.width = 40;
AFSmallChair.depth = 40;
AFSmallChair.chairName = 'Small Chair';
