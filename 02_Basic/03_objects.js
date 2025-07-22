// Signleton
// Object.create

// Object literals

const mySym = Symbol("key1");

const jsUser = {
    name : "Santanu",
    "full name" : "Santanu Khorat",
    [mySym] :"mykey1",
    age : 22,
    Location : "India",
    email :"santanu.com",
    isActive : true,
    lastLoginDays : "2 days ago",
}

// console.log(jsUser);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// // console.log(jsUser[mySym]);


jsUser.email = "khorat.com"
// Object.freeze(jsUser); // Prevents any changes to the object
jsUser.email = "skhora.com"
// console.log(jsUser); // Still "khorat.com" due to freeze

jsUser.greeting = function() {
    console.log("Hello JS user" );
}

jsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}` );
}

console.log(jsUser.greeting()); // undefined, as functions are not added to frozen objects
console.log(jsUser.greetingTwo());
