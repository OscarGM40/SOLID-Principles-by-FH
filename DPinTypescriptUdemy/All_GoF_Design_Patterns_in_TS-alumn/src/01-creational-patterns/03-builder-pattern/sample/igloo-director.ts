import HouseBuilder from "./house.builder";
import House from "./house.model";

// remember that it must be ${Classname}{Director}
export default class IglooDirector {
  // see how we will use the default number of windows by no constructing that part
  static construct():House {
    return new HouseBuilder()
    .setBuildingType('igloo')
    .setWallMaterial('ice')
    .setDoorsNumber(1)
    .getResult()
  }
}