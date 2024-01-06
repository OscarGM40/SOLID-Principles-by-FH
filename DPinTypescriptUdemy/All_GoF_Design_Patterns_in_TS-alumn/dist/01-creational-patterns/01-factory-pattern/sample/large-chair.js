"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chair_1 = require("./chair");
class LargeChair extends chair_1.Chair {
    constructor() {
        super(LargeChair.height, LargeChair.width, LargeChair.depth);
    }
}
exports.default = LargeChair;
LargeChair.height = 80;
LargeChair.width = 80;
LargeChair.depth = 80;
