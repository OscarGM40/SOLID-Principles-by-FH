import { Chair } from './chair'

export default class MediumChair extends Chair {
    private static height = 60
    private static width = 60
    private static depth = 60

    constructor() {
        super(MediumChair.height, MediumChair.width, MediumChair.depth)
    }
}
