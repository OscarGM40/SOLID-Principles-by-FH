import HouseBuilder from "./house.builder";
import House from "./house.model";

export default class CastleDirector {
  static construct():House {
    return new HouseBuilder()
    .setBuildingType('castle')
    .setWallMaterial('sandstone')
    .setDoorsNumber(100)
    .setWindowNumber(200)
    .getResult()
  }
} 

const enum Asinto {
  ASIN="ASIN",
  TO = "TO"
}
type AsintoType= `${Asinto}`;