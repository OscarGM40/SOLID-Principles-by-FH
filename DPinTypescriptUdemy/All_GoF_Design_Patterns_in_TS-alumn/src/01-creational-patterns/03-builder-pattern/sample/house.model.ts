// model of the final desired instances
export default class House {
  doors = 0
  windows = 0
  wallMaterial = ''
  buildingType = ''

    construction(): string {
        return `This is a ${this.wallMaterial} ${this.buildingType} with ${this.doors} door(s) and ${this.windows} window(s).`;
    }
}

export interface IHouseBuilder {
  //porque ahora necesito una instancia? <- antes se confundió al no agregarla,siempre tiene que ir para obligar a la clase a usar composición
  house: House;
  setBuildingType(buildingType:string): this;
  setWallMaterial(wallMaterial:string): this;
  setDoorsNumber(doors:number): this;
  setWindowNumber(windows:number): this;
  getResult():House;
}

