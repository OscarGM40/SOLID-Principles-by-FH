"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chair_1 = require("./chair");
class MediumChair extends chair_1.Chair {
    constructor() {
        super(MediumChair.height, MediumChair.width, MediumChair.depth);
    }
}
exports.default = MediumChair;
MediumChair.height = 60;
MediumChair.width = 60;
MediumChair.depth = 60;
