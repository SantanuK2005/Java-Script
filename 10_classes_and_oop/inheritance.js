
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const coffe = new Teacher("coffe", "chai@teacher.com", "123")

coffe.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(coffe instanceof User);
