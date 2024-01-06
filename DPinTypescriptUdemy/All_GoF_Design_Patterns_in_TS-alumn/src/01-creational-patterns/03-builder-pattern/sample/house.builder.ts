import House, { IHouseBuilder } from './house.model';

export default class HouseBuilder implements IHouseBuilder {

  // si se pudiera hacer privada seria mejor
  readonly house: House;

  constructor(){
    this.house= new House();
  }

  setBuildingType(buildingType: string): this {
      this.house.buildingType = buildingType;
      return this;
  }
  setWallMaterial(wallMaterial: string): this {
      this.house.wallMaterial = wallMaterial;
      return this;
  }
  setDoorsNumber(doors: number): this {
      this.house.doors=doors;
      return this;
  }
  setWindowNumber(windows: number): this {
      this.house.windows= windows;
      return this;
  }
  getResult(): House {
      return this.house;
  }
}