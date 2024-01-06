"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// model of the final desired instances
class House {
    constructor() {
        this.doors = 0;
        this.windows = 0;
        this.wallMaterial = '';
        this.buildingType = '';
    }
    construction() {
        return `This is a ${this.wallMaterial} ${this.buildingType} with ${this.doors} door(s) and ${this.windows} window(s).`;
    }
}
exports.default = House;
