import { AFChair } from './ConcreteChair'

export default class AFLargeChair extends AFChair {
    private static height = 80
    private static width = 80
    private static depth = 80
    private static readonly chairName = 'Large Chair'

    constructor() {
        super(
            AFLargeChair.height,
            AFLargeChair.width,
            AFLargeChair.depth,
            AFLargeChair.chairName
        )
    }
}
