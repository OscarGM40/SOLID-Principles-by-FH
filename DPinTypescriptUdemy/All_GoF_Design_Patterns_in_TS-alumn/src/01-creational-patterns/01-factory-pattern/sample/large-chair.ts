import { Chair } from './chair'

export default class LargeChair extends Chair {
    private static height = 80
    private static width = 80
    private static depth = 80

    constructor() {
        super(LargeChair.height,LargeChair.width,LargeChair.depth)
    }
}
