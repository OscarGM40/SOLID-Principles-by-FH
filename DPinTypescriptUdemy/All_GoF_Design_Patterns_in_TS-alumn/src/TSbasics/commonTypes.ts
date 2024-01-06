let foo: string;
let bar: boolean;
let baz: number;
let qux: string[];
// a touple is an array of a determined length, so it has to be an array of 2 positions,with those types.Could be useful
let quuz: [number, string];
let corge: { [key:number]: string};
let grault: Set<number>;

foo = 'ABC';
bar = true;
baz = 123;
qux = ['a','b','c','d'];
quuz = [1,'abc']
corge = {123:'abc',345:'gasd'};
grault= new Set([1,2,3,4,4])