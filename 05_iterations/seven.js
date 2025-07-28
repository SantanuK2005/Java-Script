const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num +10)  // {return num +10} So the scsonp are any time open to the requerd to return.


const newNums = myNumbers
                .map( (num) => num*10)
                .map( (num) => num+1)
                .filter( (num) => num >= 40)

console.log(newNums);