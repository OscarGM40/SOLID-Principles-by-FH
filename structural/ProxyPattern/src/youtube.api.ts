import { IVideoProvider } from "./video-provider.interface";


class YoutubeAPI implements IVideoProvider {
 private _playlist: any = {
   courses: [
     'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
     'https://www.youtube.com/watch?v=Ph4SLROqSEQ',
     'https://www.youtube.com/watch?v=Tvs3r0TVc$I',
    ]
 }
 /* el code solo podrá ser courses y devolverá el arreglo de URLS */
  async getPlayList(code: string): Promise<String[]> {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        const result = this._playlist[code] || null;
        resolve(result);
      }, 3000)
    })
  }
}

export { YoutubeAPI }