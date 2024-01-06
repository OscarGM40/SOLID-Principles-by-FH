import { AFTable } from './ConcreteTable'

export default class AFMediumTable extends AFTable {
    private static height = 60
    private static width = 60
    private static depth = 60
    private static readonly tableName = 'Medium Table'

    constructor() {
        super(
            AFMediumTable.height,
            AFMediumTable.width,
            AFMediumTable.depth,
            AFMediumTable.tableName
        )
    }
}
