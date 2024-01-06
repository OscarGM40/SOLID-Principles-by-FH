// here it goes the factory of subfactories
import ChairFactory from './chair-factory/Chair-factory'
import { IChair } from './chair-factory/ConcreteChair'
import { AF_CHAIR_TYPE, AF_TABLE_TYPES, Dimension, Table_Types } from './sample.types'
import { ITable } from './table-factory/ConcreteTable'
import TableFactory from './table-factory/table-factory'

// ojo que esta union es fundamental para que los contratos cuadren
type IFurniture = {
    height: number
    width: number
    depth: number
    getDimensions(): Dimension
} & ({ chairName: string } | { tableName: string })

export default class FurnitureFactory {
    static getFurniture(
        furniture: AF_CHAIR_TYPE | AF_TABLE_TYPES
    ): IFurniture | undefined {
        if (['Small Chair', 'Medium Chair', 'Big Chair'].indexOf(furniture) > -1) {
            return ChairFactory.getChair(furniture as AF_CHAIR_TYPE)
        }

        if (['Small Table', 'Medium Table', 'Big Table'].indexOf(furniture) > -1) {
            return TableFactory.getTable(furniture as Table_Types)
        }
    }
}
