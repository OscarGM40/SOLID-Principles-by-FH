import { AFTable } from './ConcreteTable'

export default class AFSmallTable extends AFTable {
    private static height = 40
    private static width = 40
    private static depth = 40
    private static readonly tableName = 'Small Table'

    constructor() {
        super(
            AFSmallTable.height,
            AFSmallTable.width,
            AFSmallTable.depth,
            AFSmallTable.tableName
        )
    }
}
