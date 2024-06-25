// 3. Prototype
// Javascript is a prototype based language which means that every object in JS has a prototype property.
// Prototype is also an object.
// All objects inherit their properties and methods from their prototype.
// When we create a new object using a constructor function, the object inherits all the properties and methods from the constructor's prototype.
// We can add properties and methods to the prototype of a constructor function which will be inherited by all the objects created using the constructor function.
// We can access the prototype of an object using __proto__ property or Object.getPrototypeOf() method.

// function multiplyBy5(num) {
//     return num * 5;
// }
// multiplyBy5.power=2
// console.log(multiplyBy5(5));//25
// console.log(multiplyBy5.power);//2
// console.log(multiplyBy5.prototype);//undefined

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

//making prototype and adding it to createUser
createUser.prototype.increaseScore = function () {
  this.score++;
};
console.log(createUser.prototype); //{increaseScore: ƒ, constructor: ƒ}
const user1 = new createUser("john", 5);
console.log(user1); //createUser {username: "john", score: 5}
user1.increaseScore();
console.log(user1); //createUser {username: "john", score: 6}

/*
Here's what happens behind the scenes when the new keyword is used:
A new object is created: The new keyword initiates the creation of a new JavaScript object.
A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/
