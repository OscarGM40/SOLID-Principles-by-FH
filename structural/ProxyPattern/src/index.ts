import { VideoProxy } from "./video.proxy";
import { YoutubeAPI } from "./youtube.api";

/* instancio la clase Proxy ojo,que lleva por downcasting y polimorfismo a YoutubeAPI implements Provider */
const proxy = new VideoProxy(new YoutubeAPI());


(async () => {
  /* la primera vez debería tardar unos 3 segundos */
  await getPlayList();
  /* sucesivas llamadas cogerían la data de la caché y tardarían nada */
  await getPlayList();
  await getPlayList();
  await getPlayList();
})();

async function getPlayList() {
  const startDate = new Date();

  await proxy.getPlayList('courses');
  const endDate = new Date();
  console.log(`El proceso se completó en ${(endDate.getTime() - startDate.getTime())/1000} segundos`);
}