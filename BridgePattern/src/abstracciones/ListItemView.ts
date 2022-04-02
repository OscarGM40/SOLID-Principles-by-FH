
/* abstracciones.Esta clase abstracta sería la columna izquierda del puente */
export abstract class ListItemView {
  viewModel: IViewModel; // <- esto es el puente,parece que la que lleve el puente debe ser sí o sí una clase abstracta/abstracción ya que necesitamos un constructor para el puente

  constructor(viewModel: IViewModel){
    this.viewModel = viewModel;
  }

  render(): void {
    console.log('default abstract rendering');
  }
}
/* esto sería el pilar de la derecha, el implementator ,es decir ,la columna izquierda.Puede ser una interface pero también otra clase abstracta */
export interface IViewModel {
  title(): String;
  image(): String;
}