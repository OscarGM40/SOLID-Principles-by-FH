"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const house_builder_1 = require("./house.builder");
// see that now I can create as many Directors as I want
class HouseBoatDirector {
    static construct() {
        // The only requisit is to call getResult()I can build anything.Amazing
        return new house_builder_1.default()
            .setBuildingType('House Boat')
            .setWallMaterial('Wood')
            .setDoorsNumber(6)
            .setWindowNumber(8)
            .getResult();
    }
}
exports.default = HouseBoatDirector;
