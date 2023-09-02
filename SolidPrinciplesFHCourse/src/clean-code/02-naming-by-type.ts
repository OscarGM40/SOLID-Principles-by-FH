(() => {
  // arreglo de temperaturas celsius
  
  const arrayOfNums = [33.6, 12.34];
  const celsiusTemperatures = [33.6, 12.34];

  // Dirección ip del servidor
  const ip = "123.123.123.123";
  const serverIp = "123.123.123.123";

  // Listado de usuarios
  const people = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];
  const users = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  // Listado de emails de los usuarios
  const emails = people.map((u) => u.email);
  const usersEmails = users.map((user) => user.email);

  // Variables booleanas de un video juego
  const jump = false;
  const isJumping = false; //canJump si es lo que buscamos
  const run = true;
  const isRunning= true;  //canRun tmb si es lo que buscamos
  const noTieneItems = true;
  const hasItems= false;
  const loading = false;
  const isLoading = false;

  // Otros ejercicios
  // tiempo inicial
  const start = new Date().getTime();
  const startTime = new Date().getTime();
  //....
  // 3 doritos después
  //...
  // Tiempo al final
  const end = new Date().getTime() - start;
  const endTime = new Date().getTime() - startTime;

  // Funciones
  // Obtiene los libros(no meter el All, simplemente traerá varios libros,ya veremos si son todos o agrupados o los de un año,etc).No tiene sentido usar getAllBooks, ciertamente
  function getBooks() {
    throw new Error("Function not implemented.");
  }

  // obtiene libros desde un URL
  function getBooksByUrl(url: string) {
    throw new Error("Function not implemented.");
  }

  // obtiene el área de un cuadrado basado en sus lados
  function areaCuadrado(s: number) {
    throw new Error("Function not implemented.");
  }

  function getSquareArea(side: number) {
    throw new Error("Function not implemented.");
  }

  // imprime el trabajo
  function printJobIfJobIsActive() {
    throw new Error("Function not implemented.");
  }
  // no meter lógica de la implementación en el naming,eso es parte de la función y no del nombre
  function printJob() {
    throw new Error("Function not implemented.");
  }
})();
