import { Adaptee } from "./adaptee/Adaptee";
import { EnchufeAdapter } from "./adapter/Adapter";

const ea = new EnchufeAdapter(new Adaptee());
ea.plugin();