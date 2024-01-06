"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AFChair = void 0;
class AFChair {
    constructor(height, width, depth, chairName) {
        // me gusta la opcion de obligar a las subclases a que pasen las props(supongo que él pasa de esto ya xd)
        this.height = 0;
        this.width = 0;
        this.depth = 0;
        this.chairName = '';
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.chairName = chairName;
    }
    getDimensions() {
        return {
            height: this.height,
            width: this.width,
            depth: this.depth,
        };
    }
}
exports.AFChair = AFChair;
