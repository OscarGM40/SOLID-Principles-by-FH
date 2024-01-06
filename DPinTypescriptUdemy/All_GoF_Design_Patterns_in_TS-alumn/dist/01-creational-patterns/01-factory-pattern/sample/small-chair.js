"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chair_1 = require("./chair");
class SmallChair extends chair_1.Chair {
    constructor() {
        super(SmallChair.height, SmallChair.width, SmallChair.depth);
    }
}
exports.default = SmallChair;
SmallChair.height = 40;
SmallChair.width = 40;
SmallChair.depth = 40;
