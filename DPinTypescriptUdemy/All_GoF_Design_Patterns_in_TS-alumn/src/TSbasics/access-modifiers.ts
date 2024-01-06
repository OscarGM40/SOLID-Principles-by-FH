// typescript supports access modifiers for my class properties and methods
// by default they are public

class CatAccess {
  // it is unnecessary to use public below
  public name: string;
  // if I want a property private I can use #prop or private prop
  #age:number;
  // private age would be the same(the # character only works in properties, in methods I have to use private keyword)
  // protected variables are only reachable in the class and its derived classes

  constructor(name:string,age:number){
    this.name=name;
    this.#age=age;
  }

}

const enum Colors {
  red = "red",
  yellow  = "yellow",
  orange  = "orange",
}


 