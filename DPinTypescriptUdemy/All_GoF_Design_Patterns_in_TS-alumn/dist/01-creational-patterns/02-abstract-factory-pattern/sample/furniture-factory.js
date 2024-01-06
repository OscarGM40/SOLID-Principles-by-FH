"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// here it goes the factory of subfactories
const Chair_factory_1 = require("./chair-factory/Chair-factory");
const table_factory_1 = require("./table-factory/table-factory");
class FurnitureFactory {
    static getFurniture(furniture) {
        if (['Small Chair', 'Medium Chair', 'Big Chair'].indexOf(furniture) > -1) {
            return Chair_factory_1.default.getChair(furniture);
        }
        if (['Small Table', 'Medium Table', 'Big Table'].indexOf(furniture) > -1) {
            return table_factory_1.default.getTable(furniture);
        }
    }
}
exports.default = FurnitureFactory;
