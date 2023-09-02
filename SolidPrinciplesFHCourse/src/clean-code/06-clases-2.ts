(() => {
  // No aplicando el principio de responsabilidad única

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

  interface UserProps extends PersonProps {
    email: string;
    role: string;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ birthdate, email, gender, name, role }: UserProps) {
      super({ name, gender, birthdate });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps extends UserProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      name,
      email,
      role,
      gender,
      birthdate,
      lastOpenFolder,
      workingDirectory,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  const userMock: UserSettingsProps = {
    name: "",
    email: "",
    role: "",
    gender: "F",
    birthdate: new Date("2001-01-01"),
    lastOpenFolder: "",
    workingDirectory: "",
  };

  const userSettings = new UserSettings(userMock);

  console.log({ userSettings });
})();
