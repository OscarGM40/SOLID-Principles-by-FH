import { ListItemView } from "../abstracciones/ListItemView";

/* las concrecciones no son más que hijas de ListItemView */
/* NOTA: fijate la clave es la propiedad de tipo viewModel que me da acceso a los dos tipos de vistas o layouts(con o sin thumbnail) */
export class WithThumbnailListItemView extends ListItemView {

  render() {
   console.log('-----------------------');
   console.log(`Here rendering amazing thumbnail: ${this.viewModel.image()}`)
   console.log(`${this.viewModel.title()}`);
  }
  
}