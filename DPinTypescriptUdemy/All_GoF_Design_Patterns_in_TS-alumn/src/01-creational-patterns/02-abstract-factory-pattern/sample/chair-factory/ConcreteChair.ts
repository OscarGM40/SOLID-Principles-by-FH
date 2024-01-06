import { Dimension } from '../sample.types'

export interface IChair {
    chairName: string
    height: number
    width: number
    depth: number
    getDimensions(): Dimension
}

export class AFChair implements IChair {
  // me gusta la opcion de obligar a las subclases a que pasen las props(supongo que él pasa de esto ya xd)
    height = 0
    width = 0
    depth = 0
    chairName = ''
    
    constructor(height: number, width: number, depth: number,chairName:string) {
        this.height = height
        this.width = width
        this.depth = depth
        this.chairName= chairName
    }

    getDimensions(): Dimension {
        return {
            height: this.height,
            width: this.width,
            depth: this.depth,
        }
    }
}
