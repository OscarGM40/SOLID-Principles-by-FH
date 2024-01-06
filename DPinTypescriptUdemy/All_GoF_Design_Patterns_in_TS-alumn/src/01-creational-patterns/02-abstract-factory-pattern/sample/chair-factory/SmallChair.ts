import { AFChair } from './ConcreteChair'

export default class AFSmallChair extends AFChair {
    private static height = 40
    private static width = 40
    private static depth = 40
    private static readonly chairName = 'Small Chair'

    constructor() {
        super(
            AFSmallChair.height,
            AFSmallChair.width,
            AFSmallChair.depth,
            AFSmallChair.chairName
        )
    }
}
