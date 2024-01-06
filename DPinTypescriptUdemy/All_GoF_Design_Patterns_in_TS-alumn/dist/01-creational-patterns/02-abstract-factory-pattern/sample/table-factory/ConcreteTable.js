"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AFTable = void 0;
// class to be overwritten by all derived class
class AFTable {
    constructor(height, width, depth, tableName) {
        this.tableName = '';
        this.height = 0;
        this.width = 0;
        this.depth = 0;
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.tableName = tableName;
    }
    getDimensions() {
        return {
            height: this.height,
            width: this.width,
            depth: this.depth,
        };
    }
}
exports.AFTable = AFTable;
