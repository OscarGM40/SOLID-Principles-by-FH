"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LargeTable_1 = require("./LargeTable");
const MediumTable_1 = require("./MediumTable");
const SmallTable_1 = require("./SmallTable");
class TableFactory {
    static getTable(table) {
        if (table === "Large Table" /* large */) {
            return new LargeTable_1.default();
        }
        else if (table === "Medium Table" /* medium */) {
            return new MediumTable_1.default();
        }
        else
            return new SmallTable_1.default();
    }
}
exports.default = TableFactory;
