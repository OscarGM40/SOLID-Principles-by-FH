"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const large_chair_1 = require("./large-chair");
const medium_chair_1 = require("./medium-chair");
const sample_types_1 = require("./sample.types");
const small_chair_1 = require("./small-chair");
class ChairCreator {
    static ChairFactory(chairType) {
        if (chairType === sample_types_1.chair_types.BIG) {
            return new large_chair_1.default();
        }
        else if (chairType === sample_types_1.chair_types.MEDIUM) {
            return new medium_chair_1.default();
        }
        else
            return new small_chair_1.default();
    }
}
exports.default = ChairCreator;
