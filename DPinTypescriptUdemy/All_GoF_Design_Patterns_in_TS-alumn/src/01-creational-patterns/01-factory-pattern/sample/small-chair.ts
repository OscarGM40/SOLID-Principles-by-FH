import { Chair } from './chair'

export default class SmallChair extends Chair {
    private static height = 40
    private static width = 40
    private static depth = 40

    constructor() {
        super(SmallChair.height, SmallChair.width, SmallChair.depth)
    }
}
