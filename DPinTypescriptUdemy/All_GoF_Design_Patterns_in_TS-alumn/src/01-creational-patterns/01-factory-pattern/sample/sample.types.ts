
//los types tampoco compilan a Javascript
export type Dimension = {
    height: number
    width: number
    depth: number
}
// el objeto si va a compilar a JS, pero ni los types ni las interfaces,asinto compilan.Son gratis XD
export const chair_types = {
  BIG:"big",
  MEDIUM :"medium",
  SMALL:"small"
} as const;

// este me da las keys envueltas en un string
export type CHAIR_SIZE = keyof typeof chair_types;
//esto me da los values como types
export type CHAIR_SIZE_B = (typeof chair_types)[keyof typeof chair_types];