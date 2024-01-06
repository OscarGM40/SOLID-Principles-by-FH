"use strict";
// An array is a JavaScript object first that can contain a series of any types, but in TypeScript you can set the types explicitly or even as unknown.
let a;
a = ['a', 'b', 'd', 'd'];
let b;
b = [1, 2, 3, 4];
let c;
c = [true, false, true];
let d;
d = [1, 'a', true, ['even', 'another', 'internal', 'array']];
// Array items can be retrieved using a zero based index.
console.log(a[1]);
console.log(b[0]);
console.log(c[1]);
console.log(d[2]);
// arrays are objects and they have their own methods
b.push();
