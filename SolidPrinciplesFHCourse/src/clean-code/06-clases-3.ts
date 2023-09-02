(() => {
  // APLICANDO EL PRINCIPIO DE RESPONSABILIDAD ÚNICA
  // PRIORIZAR COMPOSICIÓN FRENTE A LA HERENCIA

  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  // ahora son Settings,solo, no sabemos si de un User o de quien
  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  // aqui podia habe usado interface UserSettingsProps extends UserProps,PersonProps,SettingsProps {} y dejo las llaves vacias
  interface UserSettingsProps {
    name: string;
    email: string;
    role: string;
    gender: Gender;
    birthdate: Date;
    lastOpenFolder: string;
    workingDirectory: string;
  }
  class UserSettings {
    // aqui se da la composición.Ojo, una clase compositora de otras tiene que tener propiedades de sus tipos()
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthdate,
      email,
      role,
      lastOpenFolder,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }
  }

     const userSettings = new UserSettings({
       birthdate: new Date("1985-10-21"),
       email: "fernando@google.com",
       gender: "M",
       lastOpenFolder: "/home",
       name: "Fernando",
       role: "Admin",
       workingDirectory: "/usr/home",
     });
  console.log({ userSettings });
})();
