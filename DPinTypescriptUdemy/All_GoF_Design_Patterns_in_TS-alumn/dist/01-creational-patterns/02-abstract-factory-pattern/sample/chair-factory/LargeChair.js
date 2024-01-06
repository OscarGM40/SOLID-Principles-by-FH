"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConcreteChair_1 = require("./ConcreteChair");
class AFLargeChair extends ConcreteChair_1.AFChair {
    constructor() {
        super(AFLargeChair.height, AFLargeChair.width, AFLargeChair.depth, AFLargeChair.chairName);
    }
}
exports.default = AFLargeChair;
AFLargeChair.height = 80;
AFLargeChair.width = 80;
AFLargeChair.depth = 80;
AFLargeChair.chairName = 'Large Chair';
