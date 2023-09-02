(() => {
  // función para obtener información de una película por Id
  function getMovieById(movieId: string) {
    //  podria pasar movieId a id tmb,ya que quedó claro en el nombre
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getCastByMovieId(id: string) {
    // aqui ya dejamos el id,pues realmente queda claro en el naming que el parametro es el id de la movie
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getBioByActorId(id: string) {
    console.log({ id });
  }

  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }
  // Crear una película
  function createMovie(movie: Movie) {
    const { title, description, rating, cast } = movie;
    console.log({ title, description, rating, cast });
  }

  function findActorByName(fullName: string) {
    return true;
  }
  function createActor(fullName: string): boolean {
    // NOTA: esta función no deberia de buscar el nombre,pues tiene dos responsabilidades entonces(buscar y crear).
    // tarea asincrona para verificar nombre
    // ..
    // ..
    // NOTE asi que en vez de que lo buscara aqui llamariamos a otra,etc
    if (!findActorByName(fullName)) return false;

    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }

  // Continuacion, refactorizar elses en las condiciones
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    // esto es muy complicado, realmente puedo hacer el return de la cantidad
    /*  let result: number;

    if (isDead) {
      result = 1500;
    } else {
      if (isSeparated) {
        result = 2500;
      } else {
        if (isRetired) {
          result = 3000;
        } else {
          result = 4000;
        }
      }
    } 
    return result;
    */

    // simplemente retornar el number.Fijate como hemos quitado los else
    if (isDead) return 1500;
    if (isSeparated) return 2500;
    return isRetired ? 3000 : 4000;
  };
  // sin embargo lo mejor sería usar un Record<>
  type PersonStatus = "Dead" | "Separated" | "Retired";
  const getAmountByStatus = (status: PersonStatus) => {
    // objeto para hacer de tabla. Debo usar Records masivamente,asinto
    // fijate que no necesito usar typeof pues ya es un type idiota
    const amountByStatus: Record<PersonStatus, number> = {
      Dead: 1500,
      Retired: 1500,
      Separated: 3000,
    };
    return amountByStatus[status] ?? 4000;
  };
})();
