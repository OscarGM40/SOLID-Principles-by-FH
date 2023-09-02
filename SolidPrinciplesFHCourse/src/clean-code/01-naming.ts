(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToEvaluate = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  // Archivos marcados para borrar - files to delete
  // They sound synonymous but deleting and erasing a file are two different things. When you delete a file, you just reallocate it on the system making it harder to find, i.e., the files remain present in your system but are no more accessible. When you erase a file, it is gone forever.
  const filesToErase = filesToEvaluate.map((file) => file.flagged);

  // Malos nombres, demasiado abstractos
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  const ddmmyyyy = new Date();
  const today = new Date();

  // días transcurridos - elapsed time in days
  const d: number = 23;
  const differenceInDays: number = 23;

  // número de archivos en un directorio - number of files in directory
  const dir = 33;
  const filesInDirectory: number = 33;

  // primer nombre - first name
  const nombre = "Fernando";
  const firstName = "Fernando";

  // primer apellido - last name
  const apellido = "Herrera";
  const firstSurname = "Herrera";

  // días desde la última modificación - days since modification
  const dsm = 12;
  const daysSinceLasModification = 13;

  // cantidad máxima de clases por estudiante - max classes per student
  const max = 6;
  const maxClassesPerStudent = 6;
})();
