const { use } = require("react");

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

function calculatePrice(val1, val2, ...num1){ 
    return num1
}

// console.log(calculatePrice(200, 400, 555));

const user = {
    username: "santanu",
    price: 199 
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 299
})

const myNewArray = [200,300, 500, 400]

function returnSecondvalue(getArray){
    return getArray[1]
}

// console.log(returnSecondvalue(myNewArray))
console.log(returnSecondvalue([100, 200, 300, 400]));
