"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const furniture_factory_1 = require("./furniture-factory");
// it is highly possible that I must use optional chain operators with this pattern from the client
let Furniture = furniture_factory_1.default.getFurniture('Medium Table');
console.log(Furniture === null || Furniture === void 0 ? void 0 : Furniture.getDimensions());
Furniture = furniture_factory_1.default.getFurniture('Small Chair');
console.log(Furniture === null || Furniture === void 0 ? void 0 : Furniture.getDimensions());
