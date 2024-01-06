"use strict";
// Imagine that the user has been given a choice using some kind of navigation interface(choice that we cannot now until the app is on runtime) .The choice is about the chairs the user will add
// So when the user select the chair the creator class will instantiate the concrete obj in the factory method and return it to the user(client)
// See that the factory is the part of my program that is creating a separation or abstraction between the instantiating of your object and where it is used
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chair = void 0;
class Chair {
    // si tienen un valor las subclases no necesitan redeclarar estos campos de clase, si solo las defino si que lo tienen que hacer(esto no está bien en el texto,por eso me fallaba, pero en el video las da valor)
    /* height = 0;
    width = 0;
    depth = 0; */
    constructor(height, width, depth) {
        this.height = height;
        this.width = width;
        this.depth = depth;
    }
    getDimensions() {
        return {
            height: this.height,
            width: this.width,
            depth: this.depth,
        };
    }
}
exports.Chair = Chair;
