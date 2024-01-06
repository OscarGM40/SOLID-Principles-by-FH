"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const house_builder_1 = require("./house.builder");
class CastleDirector {
    static construct() {
        return new house_builder_1.default()
            .setBuildingType('castle')
            .setWallMaterial('sandstone')
            .setDoorsNumber(100)
            .setWindowNumber(200)
            .getResult();
    }
}
exports.default = CastleDirector;
