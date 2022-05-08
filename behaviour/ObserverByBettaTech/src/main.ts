import { Subscriber } from "./concrecciones/Subscriber";
import { YoutubeChannel } from "./concrecciones/YoutubeChannel";

let channel = new YoutubeChannel();
let s1 = new Subscriber(channel);
let s2 = new Subscriber(channel);

channel.attach(s1);
channel.attach(s2);

channel.addNewVideo("Publicado video 1 del patrón observer");