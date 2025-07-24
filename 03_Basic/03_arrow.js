const user = {
    username: "santanu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    } 
}

// user.welcomeMessage()
// user.username = "san"  //context change
// user.welcomeMessage()

// console.log(this);

// function chai(){
  //  let username = "santanu"
    // console.log(this.username);
// }
// chai()


// const chai = function(){
//    let username = "santanu"
//    console.log(this.username);
// }
// chai()


const chai = () => {
     let username = "santanu"
     console.log(this.username);
}
// chai()

// const addTwo = (num1, num2) => {  // if to a {} used to rap it then write a return
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2; 

// const addTwo = (num1, num2) =>(num1 + num2); // if to a () used to rap not Required to a return.

const addTwo = (num1, num2) =>({username : "santanu"})


console.log(addTwo(5, 10));


// const myArray = [1,2,3,4,5,9]

// myArray.forEach()