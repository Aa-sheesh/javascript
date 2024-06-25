//ES 6

// class User {
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     //complex DB calls
//     return `${this.password}abc`;
//   }
// }

// const userOne = new User("Aashish", "aashish@mail.com", "123");
// console.log(userOne.encryptPassword());

//Behind the scenes
function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
}
User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
const userTwo = new User("Raja", "raja@mail.com", "123");

console.log(userTwo.encryptPassword());