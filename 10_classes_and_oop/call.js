function SetUsername(usernane){
    // complex DB calls
    this.usernane =usernane
    console.log("called");
    
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}


const coffe = new createUser("coffe", "coffe@.com", "123")
console.log(coffe);
