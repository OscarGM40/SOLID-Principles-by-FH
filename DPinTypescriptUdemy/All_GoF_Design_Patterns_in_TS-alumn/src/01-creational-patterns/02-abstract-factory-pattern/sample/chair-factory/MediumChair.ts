import { AFChair } from './ConcreteChair'

export default class AFMediumChair extends AFChair {
    private static height = 60
    private static width = 60
    private static depth = 60
    private static readonly chairName = 'Medium Chair'

    constructor() {
        super(
            AFMediumChair.height,
            AFMediumChair.width,
            AFMediumChair.depth,
            AFMediumChair.chairName
        )
    }
}
