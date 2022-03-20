import MyConfiguration from './my-configuration';

import { expect } from "chai";
import "mocha";

let config = MyConfiguration.getInstance();

describe('Pruebas en patrón creacional Singleton', () => { 

  it("object should be not null", () => {
    expect(MyConfiguration.getInstance()).to.not.be.null;
  })
  
  it('objects should share same memory address', () => {
    let config2 = MyConfiguration.getInstance();
    expect(config2).to.equal(config);
  })
  
  it('environment property should have value of development', () => {
    expect(config.environment).to.equal('development');
  })
  
 })