import { AF_CHAIR_TYPE, af_chair_types } from '../sample.types'
import { IChair } from './ConcreteChair'
import AFLargeChair from './LargeChair'
import AFMediumChair from './MediumChair'
import AFSmallChair from './SmallChair'

export default class ChairFactory {
    static getChair(chair: AF_CHAIR_TYPE): IChair {
        if (chair === af_chair_types.large) {
            return new AFLargeChair()
        } else if (chair === af_chair_types.medium) {
            return new AFMediumChair()
        } else return new AFSmallChair()
    }
}
