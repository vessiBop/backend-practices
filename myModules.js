// const { useState } = require("react"); ---- // Node.js way to import 
// module.exports = { greeting }; ---- // Node.js way to export

const addNums = (num1, num2) => num1 + num2;
const subtractNums = (num1, num2) => num1 - num2;
const isNumber = (num) => Boolean(parseInt(num));


module.exports = {
    addNums,
    subtractNums,
    isNumber
};