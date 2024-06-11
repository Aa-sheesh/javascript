// normal function
// function sayName(){
//     console.log("A");
//     console.log("A");
//     console.log("S");
//     console.log("H");
//     console.log("I");
//     console.log("S");
//     console.log("H");
// }
// sayName();

//Function with parameters with arrow function
// const sum=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(sum(5,5));

// function loginUserMessage(username){
//     return(`${username} has logged in`);
// }
// console.log(loginUserMessage('Aashish'));

//Rest Operator
// function calculateCartPrice(num){
//     return num;
// }
// console.log(calculateCartPrice(10,20,30,40,50));//problem statement

// function calculateCartPrice1(...num){
//     return num;
// }
// console.log(calculateCartPrice1(10,20,30,40,50));//answer

// function calculateCartPrice2(val1,val2,...num){
//     return num;
// }
// console.log(calculateCartPrice2(10,20,30,40,50));

//Objects in Functions
// const user={
//     username:'Aashish',
//     price:199
// }
// function handleObject(anyObject){
//     console.log(`The username is ${anyObject.username} and the price is ${anyObject.price}`);
// }
// Way 1
// handleObject(user);
// Way 2
// handleObject({
//     username:'Mummy',
//     price:299
// })

//Arrays in functions
// const myNewArray=[1,2,3,4,5];
// const returnSecondValue=(array)=>{
//     console.log(array[1]) ;
// }
// returnSecondValue(myNewArray);