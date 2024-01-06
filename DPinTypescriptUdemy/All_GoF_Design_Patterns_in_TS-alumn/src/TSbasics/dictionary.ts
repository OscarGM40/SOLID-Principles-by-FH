// a Dictionary is used as a key/value construct, where I can retrieve a value from it by using the key

let dictionary: { [key: number]: string };
dictionary = { 
  123: 'abc',
  456: 'def' 
} as const;

let dictionaryB: { [key: string]: boolean }
dictionaryB = { 
  abc: true,
  def: false,
  ghi: true 
};

console.log(dictionary[123])
console.log(dictionaryB['def'])

// Since Dictionaries are really just objects. You can also retrieve
// a dictionary's value using object notation if the keys are strings
console.log(dictionaryB.abc);

// and I can add items to a dictionary giving a new key/value pair
dictionary['789'] = "flkfj";

//or delete items through the key and the delete keyword
delete dictionary['456'];

// The values of a dictionary can be of any type, even an array.
let dicC: { [id: number]: number[] }
dicC = { 1: [1, 2, 3], 2: [4, 5, 6], 3: [7, 8, 9], 4: [10, 11, 12] }
console.log(dicC)

// recuerda que puedo acceder a sus keys con keyof typeof obj o a sus values con (typeof dict)[keyof type dict], si además hago constante el diccionario los valores serán inmutables y los sabrá TS
const dictionaryC = {
    123: 'abc',
    456: 'def',
} as const;
type dictionaryValuesAsType = (typeof dictionaryC)[keyof typeof dictionaryC];

let varA: dictionaryValuesAsType = 'abc'

