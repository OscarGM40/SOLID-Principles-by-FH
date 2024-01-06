import axios from "axios";


export abstract class HttpClient {
  abstract get(url:string):Promise<any>;
  // resto de verbos
}

export class AxiosClient extends HttpClient {
   async get(url: string) {
    const { data, status } = await axios.get(url);
    return { data, status };
  } 
  // seguiriamos con el resto de verbos

}

export class FetchClient extends HttpClient {
     async get(url: string) {
      const resp = await fetch(url);
      const data = await resp.json();
      return { data: data, status: resp.status };
    } 
}


