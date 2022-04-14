import { IVideoProvider } from "./video-provider.interface";


class VideoProxy implements IVideoProvider {
  private _cache: any = {};

  constructor(private readonly provider: IVideoProvider) {

  }

  async getPlayList(code: string): Promise<String[]> {
    let result = this._cache[code];
    if(!result) {
      result = await this.provider.getPlayList(code);
      this._cache[code] = result;
    }
    return result;
  }
}

export { VideoProxy }