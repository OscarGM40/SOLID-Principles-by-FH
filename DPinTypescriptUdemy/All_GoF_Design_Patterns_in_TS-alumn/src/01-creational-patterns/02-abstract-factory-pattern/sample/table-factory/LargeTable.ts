import { AFTable } from './ConcreteTable'

export default class AFLargeTable extends AFTable {
    private static height = 80
    private static width = 80
    private static depth = 80
    private static readonly tableName = 'Large Table'

    constructor() {
        super(
            AFLargeTable.height,
            AFLargeTable.width,
            AFLargeTable.depth,
            AFLargeTable.tableName
        )
    }
}
