(() => {
  type Gender = "M" | "F";

  class Person {
    constructor(public name: string, public gender: Gender, public birthdate: Date) {}
  }

  class User {
    private lastAccess: Date = new Date();
    constructor(public email: string, public role: string) {}
    checkCredentials() {
      return true;
    }
  }

  class Settings {
    constructor(public workingDirectory: string, public lastFolderOpen: string) {}
  }

  class UserSettings {
    constructor(private person: Person, private user: User, private settings: Settings) {}
  }

  const userSettings = new UserSettings(
    new Person("Fernando", "M", new Date("1985-01-01")),
    new User("fernando@gmail.com", "Admin"),
    new Settings("/home/Descargas", "/bin"),
  );
})();
