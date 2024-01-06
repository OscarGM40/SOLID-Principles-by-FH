// on large projects it is common to split up your code in separated files.When doing this you will need to teall each file which other files it needs to reference in case it is using objects,classes,types, interfaces,constants,etc from other files

import { Cat } from "./classes";
//anything that is able to being imported must have been exported previously

const CAT = new Cat('cosmonauta');

// recuerda que para que Node interprete los import/export tengo que fijar el module loader a CommonJS.El browser si que interpreta ES2015