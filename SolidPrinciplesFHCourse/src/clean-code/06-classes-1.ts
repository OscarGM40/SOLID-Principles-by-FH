(() => {
  // NO APLICANDO el principio de responsabilidad única
  type Gender = "F" | "M";
  // forma prehistoric,de las podemitas
  /*   class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor(name: string, gender: Gender, birthdate: Date) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  } */

  // actualmente TS permite definir el nivel de acceso en el constructor(sea cual sea)y obviar la asignacion, ya hace por detrás el this.name = name
  class Person {
    constructor(public name: string, public gender: Gender, public birthdate: Date) {}
  }

  // const newPerson = new Person("Fernando", "M", new Date("1985-10-21"));

  class User extends Person {
    // recuerda que cuando tenga una función o método con más de tres parametros(cómo este constructor) deberia mandar un objeto
    private lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      public name: string,
      public gender: Gender,
      public birthdate: Date,
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenedFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(email, role, name, gender, birthdate);
    }
  }
  const userSettings = new UserSettings(
    "",
    "",
    "",
    "",
    "",
    "F",
    new Date("")
  )
})();
