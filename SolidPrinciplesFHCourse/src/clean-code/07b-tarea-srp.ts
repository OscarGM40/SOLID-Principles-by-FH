(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  abstract class InputEvents {
    // constructor() {} <- realmente no necesito la llamada a un constructor sin parametros
    abstract setFocus(): boolean;
    // getValue() {}
    // isActive() {}
    // removeValue() {}
  }

  class InputElement extends InputEvents {
    // recuerda que hay que seguir la milla extra y usar inyección de dependencias
    public htmlElement: HtmlElement;
    public inputAttributes: InputAttributes;

    constructor(
      public value: string,
      public placeholder: string,
      public id: string,
      private readonly type: HtmlType = "input",
    ) {
      super();
      this.htmlElement = new HtmlElement(id, type);
      this.inputAttributes = new InputAttributes(value, placeholder);
    }
    setFocus(): boolean {
      throw new Error("Method not implemented.");
    }
  }

  const nameField = new InputElement("Fernando", "Enter your name", "txtName");
  console.log({ nameField: nameField });

  // NOTA: de nuevo no estamos inviertiendo las dependencias, lo mejor sería que el ultimo constructor inyecte las dependencias :
  class InputElementDependencyInversion {
    constructor(
      public htmlElement: HtmlElement,
      public inputAttributes: InputAttributes,
      public inputEvents: InputEvents,
    ) {}
  }
  // y montar todo afuera(inversión de dependencias de la clase a afuera ??)
})();
