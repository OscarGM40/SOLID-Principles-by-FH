(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    const valuesToMatch = ["manzana", "cereza", "ciruela"];
    /*  if (fruit === "manzana" || fruit === "cereza" || fruit === "ciruela") {
      return true;
    } else {
      return false;
    } */
    return valuesToMatch.includes(fruit);
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores

  type ColorsAllowed = "red" | "yellow" | "purple";
/*   const fruitsByColor: { [key: string]: string[] } = {
    red: ["manzana", "fresa"],
    yellow: ["pina", "banana"],
    purple: ["moras", "uvas"],
  }; */
  const fruitsByColor: Record<ColorsAllowed | string,string[]> = {
    red: ["manzana", "fresa"],
    yellow: ["pina", "banana"],
    purple: ["moras", "uvas"],
  };

  function getFruitsByColor(color: ColorsAllowed | string): string[] | never {
    /*     if (fruitsByColor[color]) return fruitsByColor[color];
    throw new Error("the color must be: red, yellow, purple"); */

    return fruitsByColor[color] ??  (() => { throw new Error("error xungo"); })();
    if (color === "red") {
      return ["manzana", "fresa"];
    } else if (color === "yellow") {
      return ["piña", "banana"];
    } else if (color === "purple") {
      return ["moras", "uvas"];
    } else {
      throw Error("the color must be: red, yellow, purple");
    }
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = false;
  let isFourthStepWorking = true;

  function workingSteps() {
    /*     if (isFirstStepWorking === true) {
      if (isSecondStepWorking === true) {
        if (isThirdStepWorking === true) {
          if (isFourthStepWorking === true) {
            return "Working properly!";
          } else {
            return "Fourth step broken.";
          }
        } else {
          return "Third step broken.";
        }
      } else {
        return "Second step broken.";
      }
    } else {
      return "First step broken.";
    } */
    if (!isFirstStepWorking) return "First step broken";
    if (!isSecondStepWorking) return "Second step broken";
    if (!isThirdStepWorking) return "Third step broken";
    if (!isFourthStepWorking) return "Fourth step broken";
    return "Working properly";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  console.log({ pinkFruits: getFruitsByColor("pink") }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
