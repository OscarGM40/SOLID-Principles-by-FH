import { ListItemView } from "../abstracciones/ListItemView";
import { WithThumbnailListItemView } from "../concrecciones/WithThumbNailListItemView";
import { VideoViewModel } from '../concrecciones/VideoViewModel';
import { JustTextListItemView } from "../concrecciones/JustTextListItemView";
import { StreamViewModel } from '../concrecciones/StreamVideoViewModel';

export const content = [
  {
    type: "video",
    title: "Egoland 2: Tirando misiles",
    image: "Amazing image",
  },
  {
    type: "stream",
    title: "JUGANDO A POKEMON!, UNANSE!",
    image: "Amazing image",
    viewers: 10
  },
  {
    type: "stream",
    title: "SKYRIM LIVES OR NOT!",
    image: "Amazing image",
    viewers: 1
  },
  {
    type: "video",
    title: "Campanadas Ibai 2034",
    image: "Amazing image",
  },
  {
    type: "video",
    title: "Vegeta7777 muere",
    image: "Amazing image",
  },
];

const listViews: ListItemView[] = [];

for(let item of content){
  if(item.type==="video"){
    listViews.push( 
      Math.random() > 0.5 
      ? new WithThumbnailListItemView(new VideoViewModel(item))
      : new JustTextListItemView(new VideoViewModel(item))
    )
  }else if(item.type==="stream"){
    listViews.push(
      Math.random() > 0.5
      ? new WithThumbnailListItemView(new StreamViewModel(item))
      : new JustTextListItemView(new StreamViewModel(item))
    )
  }
}
/* fijate como todo dios es una instancia de ListItemView  y puede renderizar */
for(let view of listViews) {
  view.render()
}
/*  y fijate como puedo crear tipos,vistas,etc totalmente desacopladas pero trabajando a la perfección  */