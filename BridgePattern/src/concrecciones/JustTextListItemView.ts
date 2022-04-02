import { ListItemView } from "../abstracciones/ListItemView";


export class JustTextListItemView extends ListItemView {
  render(): void {
    console.log('-----------------');
    console.log(`Just rendering text this one: ${this.viewModel.title()}`);
    console.log('-----------------');
  }
}