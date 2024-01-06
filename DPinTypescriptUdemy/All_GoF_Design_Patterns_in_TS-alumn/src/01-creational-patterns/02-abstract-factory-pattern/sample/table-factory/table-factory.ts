
import { Table_Types } from "../sample.types"
import { ITable } from "./ConcreteTable"

import AFLargeTable from "./LargeTable"
import AFMediumTable from "./MediumTable"
import AFSmallTable from "./SmallTable"

export default class TableFactory {
    static getTable(table: Table_Types): ITable {
        if (table === Table_Types.large) {
            return new AFLargeTable()
        } else if (table === Table_Types.medium) {
            return new AFMediumTable()
        } else return new AFSmallTable()
    }
}
