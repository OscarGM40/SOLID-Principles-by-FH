"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const house_builder_1 = require("./house.builder");
// remember that it must be ${Classname}{Director}
class IglooDirector {
    // see how we will use the default number of windows by no constructing that part
    static construct() {
        return new house_builder_1.default()
            .setBuildingType('igloo')
            .setWallMaterial('ice')
            .setDoorsNumber(1)
            .getResult();
    }
}
exports.default = IglooDirector;
