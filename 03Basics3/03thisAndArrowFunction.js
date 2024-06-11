// //object me this operator-kam values
// const user = {
//   username: "Aashish",
//   price: 199,

//   welcomeMessage: function () {
//     console.log(`Welcome ${this.username}`);
//     // console.log(this);//user object
//   },
//   //agar current context me this use karenge toh use kar sakte hai values
// };
// // user.welcomeMessage();//Welcome Aashish
// // user.username='Mummy';
// // user.welcomeMessage();//Welcome Mummy
// console.log(this);//window object

//Functions me this operator-zyada values
// const thisFunction = ()=>{
//     console.log(this);//window object
// }
// //Arrow function-less values
// function thisFunction1 (){
//     console.log(this);//window object
// }
// thisFunction1();
// // normal function me a lot of values

//Arrow function
//a. Basic arrow function
// const addTwoNo=(num1,num2)=>{
//     return num1+num2;
// }
// addTwoNo(1,2);//3
//b. Implicit return
// const addTwoNo1=(num1,num2)=>(num1+num2);
// const objectReturn=(num1,num2)=>({username:'Aashish',price:num1+num2});
// console.log(objectReturn(1,2));//{username: "Aashish", price: 3}

//forEach Loop
// const myArray = [1, 2, 3, 4, 5];
// myArray.forEach((e) => {
//     console.log(e);
// })

//Immediately Invoked Function Expression(IIFE)
(function chai() {
  console.log("Heres your chai.");
})(); //(semi colon needed here to let the function know here it ends nahi toh next iife nahi chalega)
//Global Scope ke variables se pollution se bachane ke liye IIFE ka use hota hai
((name) => {
  console.log(`Heres your chai again ${name}`);
})("Aashish");
