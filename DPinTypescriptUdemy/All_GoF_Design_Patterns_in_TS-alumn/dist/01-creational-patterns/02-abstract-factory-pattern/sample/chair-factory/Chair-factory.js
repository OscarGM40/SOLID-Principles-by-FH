"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sample_types_1 = require("../sample.types");
const LargeChair_1 = require("./LargeChair");
const MediumChair_1 = require("./MediumChair");
const SmallChair_1 = require("./SmallChair");
class ChairFactory {
    static getChair(chair) {
        if (chair === sample_types_1.af_chair_types.large) {
            return new LargeChair_1.default();
        }
        else if (chair === sample_types_1.af_chair_types.medium) {
            return new MediumChair_1.default();
        }
        else
            return new SmallChair_1.default();
    }
}
exports.default = ChairFactory;
