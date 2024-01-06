import HouseBuilder from './house.builder'
import House from './house.model'

// see that now I can create as many Directors as I want
export default class HouseBoatDirector {
    static construct(): House {
        // The only requisit is to call getResult()I can build anything.Amazing
        return new HouseBuilder()
            .setBuildingType('House Boat')
            .setWallMaterial('Wood')
            .setDoorsNumber(6)
            .setWindowNumber(8)
            .getResult()
    }
}
