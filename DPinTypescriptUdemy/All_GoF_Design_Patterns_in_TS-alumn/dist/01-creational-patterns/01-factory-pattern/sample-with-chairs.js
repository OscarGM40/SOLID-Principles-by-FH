"use strict";
// Imagine that the user has been given a choice using some kind of navigation interface(choice that we cannot now until the app is on runtime) .The choice is about the chairs the user will add
// So when the user select the chair the creator class will instantiate the concrete obj in the factory method and return it to the user(client)
// See thta the factory is the part of my program that is creating a separation or abstraction between the instantiating of your object and where it is used
class Chair {
    constructor(height, width, depth) {
        this.height = height;
        this.width = width;
        this.depth = depth;
    }
    getDimensions() {
    }
}
