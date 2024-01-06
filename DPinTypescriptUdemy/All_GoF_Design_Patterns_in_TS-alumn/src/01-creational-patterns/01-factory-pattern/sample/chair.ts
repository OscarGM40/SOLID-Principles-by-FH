// Imagine that the user has been given a choice using some kind of navigation interface(choice that we cannot now until the app is on runtime) .The choice is about the chairs the user will add
// So when the user select the chair the creator class will instantiate the concrete obj in the factory method and return it to the user(client)
// See that the factory is the part of my program that is creating a separation or abstraction between the instantiating of your object and where it is used

import { Dimension } from './sample.types'

// la interface me valdrá para la sustitución de Liskov en el factory method
export interface IChair {
    height: number
    width: number
    depth: number
    getDimensions(): Dimension
}

export class Chair implements IChair {
    // redundante poner el public,asinto
    public height: number
    public width: number
    public depth: number 
 // si tienen un valor las subclases no necesitan redeclarar estos campos de clase, si solo las defino si que lo tienen que hacer(esto no está bien en el texto,por eso me fallaba, pero en el video las da valor)
    /* height = 0;
    width = 0;
    depth = 0; */

    constructor(height: number, width: number, depth: number) {
        this.height = height
        this.width = width
        this.depth = depth
    }

    getDimensions(): Dimension {
        return {
            height: this.height,
            width: this.width,
            depth: this.depth,
        }
    }
}
