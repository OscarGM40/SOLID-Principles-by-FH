"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConcreteTable_1 = require("./ConcreteTable");
class AFMediumTable extends ConcreteTable_1.AFTable {
    constructor() {
        super(AFMediumTable.height, AFMediumTable.width, AFMediumTable.depth, AFMediumTable.tableName);
    }
}
exports.default = AFMediumTable;
AFMediumTable.height = 60;
AFMediumTable.width = 60;
AFMediumTable.depth = 60;
AFMediumTable.tableName = 'Medium Table';
