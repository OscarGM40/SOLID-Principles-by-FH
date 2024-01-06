"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const house_model_1 = require("./house.model");
class HouseBuilder {
    constructor() {
        this.house = new house_model_1.default();
    }
    setBuildingType(buildingType) {
        this.house.buildingType = buildingType;
        return this;
    }
    setWallMaterial(wallMaterial) {
        this.house.wallMaterial = wallMaterial;
        return this;
    }
    setDoorsNumber(doors) {
        this.house.doors = doors;
        return this;
    }
    setWindowNumber(windows) {
        this.house.windows = windows;
        return this;
    }
    getResult() {
        return this.house;
    }
}
exports.default = HouseBuilder;
