const myModule = require('./myModules'); 
const vowels = require('./vowels')
console.log(myModule);


const sum = myModule.addNums(1, 2);
const sumOfSubtraction = myModule.subtractNums(721, 553);
const number = myModule.isNumber(65)

console.log(sum, sumOfSubtraction, number)

const removeVowels = vowels.stringWithoutVowels();
console.log(removeVowels)