let stringVar: string;
stringVar = 'ABC';
stringVar = '123';
stringVar = 'quick brown fox, etc';
stringVar = 'ABC = 123';
// ways of using scaping literals
stringVar = 'it wasn\t me';
stringVar = "it wasn't me";
// template strings
stringVar = `abc ${stringVar} def`
console.log(stringVar);
// concatenate strings
stringVar = "abc" + " 123";
console.log(stringVar)