const score = 500
//console.log(score);

const balancce = new Number(1000);
//console.log(balancce);

//console.log(balancce.toString()); // Convert to string
//console.log(balancce.toFixed(2)); // Format to 2 decimal places

const otherNumber = 123.45622;
//console.log(otherNumber.toPrecision(4)); // Format to 4 significant digits

const longDigit = 1000000
//console.log(longDigit.toLocaleString('en-IN')); // Format with locale-specific separators


// +++++++++++++++++++ Maths operations +++++++++++++++++++++

console.log(Math); 
console.log(Math.abs(-10)); // Absolute value
console.log(Math.round(8.8)); // Round to nearest integer
console.log(Math.ceil(5.1)); // Round up
console.log(Math.floor(5.9)); // Round down


console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random() * 10) + 1); // Random integer between 1 and 10

const min = 10
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);