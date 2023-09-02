(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";
  interface HtmlElementProps {
    id: string;
    type: HtmlType;
  }

  class HtmlElement {
    public id: string;
    public type: HtmlType;

    constructor({ id, type }: HtmlElementProps) {
      this.id = id;
      this.type = type;
    }
  }

  interface InputAttributesProps {
    value: string;
    placeholder: string;
  }
  class InputAttributes {
    public value: string;
    public placeholder: string;

    constructor({ value, placeholder }: InputAttributesProps) {
      this.value = value;
      this.placeholder = placeholder;
    }
  }

  class InputEvents {
    constructor() {}
    setFocus() {}
    getValue() {
      console.log("value reached");
    }
    isActive() {}
    removeValue() {}
  }

  interface InputsElementProps extends InputAttributesProps, HtmlElementProps {}
  class InputElement {
    public htmlElement: HtmlElement;
    public inputAttributes: InputAttributes;
    public inputEvents: InputEvents;

    constructor({ id, type, placeholder, value }: InputsElementProps) {
      this.htmlElement = new HtmlElement({ id, type });
      this.inputAttributes = new InputAttributes({ value, placeholder });
      this.inputEvents = new InputEvents();
    }
  }

  const nameField = new InputElement({
    id: "txtInputName",
    type: "input",
    placeholder: "Enter your name",
    value: "Fernando",
  });

  console.log({ nameField: nameField.inputEvents.getValue() });
})();
