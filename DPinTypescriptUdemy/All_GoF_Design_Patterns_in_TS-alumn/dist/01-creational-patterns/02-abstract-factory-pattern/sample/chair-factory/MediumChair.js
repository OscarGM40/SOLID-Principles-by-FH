"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConcreteChair_1 = require("./ConcreteChair");
class AFMediumChair extends ConcreteChair_1.AFChair {
    constructor() {
        super(AFMediumChair.height, AFMediumChair.width, AFMediumChair.depth, AFMediumChair.chairName);
    }
}
exports.default = AFMediumChair;
AFMediumChair.height = 60;
AFMediumChair.width = 60;
AFMediumChair.depth = 60;
AFMediumChair.chairName = 'Medium Chair';
