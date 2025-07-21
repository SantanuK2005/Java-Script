// Dates

let myDate = new Date()
//console.log(myDate.toString()) 
//console.log(myDate.toISOString())
//console.log(myDate.toLocaleString())
//console.log(typeof myDate);

// let myDate2 = new Date(2025, 0, 21) // (Normal Declaration to single digit to date format like a (2025, 0, 21) it's mens that is counting from 0 to 11 for months, so 0 is January and 11 is December)
// let myCreateDate = new Date (2025, 5 , 12, 5, 30, 0)
// let myCreateDate = new Date("2025-01-11") // So that Declaration To the dobule digit like (YYYY-MM-DD) format.
let myCreateDate = new Date("01-11-2025") // It's mostly Used in India.
console.log(myCreateDate.toLocaleDateString())

let mtTimeStamp = Date.now()
console.log(mtTimeStamp) 


let newDate = new Date()
console.log(newDate.getDay());


newDate.toDateString('default', {
    weekday: 'long'})