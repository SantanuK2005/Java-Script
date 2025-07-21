// Array

const myArr =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const MyHeros = ["IromMan", "Thor", "Hulk", "Captain America"];
const myArr2 = new Array(0, 1, 2, 3, 4, 5);
console.log(myArr2[2]);


// Array Methods

// myArr.push(9); // Adds an element to the end
// myArr.pop(); // Removes the last element


myArr.unshift(0) // Adds an element to the beginning
myArr.shift(); // Removes the first element


const newArr = myArr.join()

console.log(myArr);
console.log(newArr);

// slice and Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);