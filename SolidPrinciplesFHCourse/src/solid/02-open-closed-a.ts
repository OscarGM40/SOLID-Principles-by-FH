import { PhotosService, PostService, TodoService } from "./02-open-closed-b";
import { AxiosClient } from "./02-open-closed-c";

(async () => {

  const httpClient = new AxiosClient();

  const todoService = new TodoService(httpClient);
  const postService = new PostService(httpClient);
  const photosService = new PhotosService(httpClient);

  const todos = await todoService.getTodoItems();
  const posts = await postService.getPosts();
  const photos = await photosService.getPhotos();

  console.log({ todos, posts, photos });
})();
