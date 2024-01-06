import { Dimension } from '../sample.types'

//interface para Liskov en el sub-factory method
export interface ITable {
    height: number
    width: number
    depth: number
    tableName: string
    getDimensions(): Dimension
}

// class to be overwritten by all derived class
export class AFTable implements ITable {
    tableName: string = ''
    height: number = 0 
    width: number = 0 
    depth: number = 0

    constructor(height: number, width: number, depth: number, tableName: string) {
        this.height = height
        this.width = width
        this.depth = depth
        this.tableName = tableName
    }

    getDimensions(): Dimension {
        return {
            height: this.height,
            width: this.width,
            depth: this.depth,
        }
    }
}
