// const tinderUser = new Object(); // Thsi a Single turn object

const tinderUser = {} // This a non single turn object

tinderUser.id = "123abc"
tinderUser.name = "Santanu"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 

const regularUser ={
    email : "san.com",
    fullName : {
        userFullname : {
            firstName: "Santanu",
            lastName: "Khorat"
        }
    }
}
// console.log(regularUser.fullName.userFullname.firstName); // Accessing nested object properties

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 6: "f"};

// const obj3 = {obj1, obj2}; 
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}; // Using spread operator to merge objects
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "santanu.con"
    },
     {
        id: 1,
        email: "santanu.con"
    },
     {
        id: 1,
        email: "santanu.con"
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // Returns an array of keys in the object
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("id")); // Checks if the object has a specific property



const course = {
    courseName: "JavaScript",
    price: 999, 
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor); 
console.log(instructor);


// {
//    "name": "Santanu",
//    "course": "JavaScript",
//    "price": "free",
// }

[
    {},
    {},
    {}
]