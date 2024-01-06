"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConcreteTable_1 = require("./ConcreteTable");
class AFSmallTable extends ConcreteTable_1.AFTable {
    constructor() {
        super(AFSmallTable.height, AFSmallTable.width, AFSmallTable.depth, AFSmallTable.tableName);
    }
}
exports.default = AFSmallTable;
AFSmallTable.height = 40;
AFSmallTable.width = 40;
AFSmallTable.depth = 40;
AFSmallTable.tableName = 'Small Table';
