// a number can be written in many bases or with floating precision
let numberVar: number
numberVar = 123 //decimal
numberVar = 123.456 //float
numberVar = 0xffff //hex
numberVar = 0b10101 //binary
numberVar = 0o671 //octal

// I can enter the radix when parsing a number to a string a get its value in another basis (radix)
console.log(numberVar.toString(8))

// numbers can also be the result of an expression
numberVar = 1 + 2 + +numberVar.toString(10);

