
interface IVideoProvider {
  getPlayList(code: string): Promise<String[]>
}

export { IVideoProvider }