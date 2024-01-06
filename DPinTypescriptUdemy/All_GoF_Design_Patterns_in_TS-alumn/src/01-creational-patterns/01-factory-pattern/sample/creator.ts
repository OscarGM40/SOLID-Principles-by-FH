import { IChair } from './chair'
import LargeChair from './large-chair'
import MediumChair from './medium-chair'
import { CHAIR_SIZE_B, chair_types } from './sample.types'
import SmallChair from './small-chair'

export default class ChairCreator {
    static ChairFactory(chairType: CHAIR_SIZE_B): IChair {
        if (chairType === chair_types.BIG) {
            return new LargeChair()
        } else if (chairType === chair_types.MEDIUM) {
            return new MediumChair()
        } else return new SmallChair()
    }
}
