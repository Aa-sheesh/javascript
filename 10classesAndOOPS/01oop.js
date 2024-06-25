// 1. Object Literals
// const user = {
//   username: "batman",
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: function () {
//     // console.log(`Username is ${this.username}, user has logged in ${this.loginCount} times`);
//     console.log(this);
//   },
// };
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

//2. Constructor Function

// const promiseone = new Promise()
// const date = new Date()
// Promise and Date are constructor functions

//Made our own constructor function
function User(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    // ye agar nahi bhi likhe tab bhi implicitly defined hota hai
    // return this;
}
// const userOne = User("batman", 8, true);
// const userOne = new User("batman", 8, true);
// this will change all values of userOne, hence we use new keyword
// const userTwo = User("superman", 5, false);
// const userTwo = new User("superman", 5, false);
// console.log(userOne);
// console.log(userTwo);
// console.log(userOne.constructor);//[Function: User]
// console.log(userOne instanceof User);//true



