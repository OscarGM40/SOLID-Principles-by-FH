"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConcreteTable_1 = require("./ConcreteTable");
class AFLargeTable extends ConcreteTable_1.AFTable {
    constructor() {
        super(AFLargeTable.height, AFLargeTable.width, AFLargeTable.depth, AFLargeTable.tableName);
    }
}
exports.default = AFLargeTable;
AFLargeTable.height = 80;
AFLargeTable.width = 80;
AFLargeTable.depth = 80;
AFLargeTable.tableName = 'Large Table';
