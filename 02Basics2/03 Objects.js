// singleton object
// Object.create(null);
// console.log(Object.create(null));

// Object literals
// const user ={
    // name:'Aashish',
    // age:18,
// }
// console.log(user);
// console.log(user.name);
// console.log(user['name']);
//Symbols in objects
// const mySymbol=Symbol('key1');
// const symbolObject={
//     name:'Aashish',
//     mySymbol:'mykey1', //wrong way
//     [mySymbol]:"mykey1"
// }
// console.log(symbolObject.mySymbol); //wrong syntax
// console.log(symbolObject[mySymbol]); //right syntax
// console.log(symbolObject);

//Methods on Objects
const user ={
    name:'Aashish',
    age:18,
    email:'aashish@mail.com'
}
//1. changing the value of object
// user.email="aashish@gmail.com"
// console.log(user);
//2. freezing values of object
// Object.freeze(user);
// user.email="aashish@gmail.com"
// console.log(user);
//3. functions in objects
//a. Arrow function
// user.greeting =()=>{
//     console.log('Hello');
// }
//b. normal function
// user.greeting = function(){
    // console.log(`Hello, ${this.name}`);//use back ticks when using some variable in string
// }
// user.greeting();
// console.log(user.greeting());