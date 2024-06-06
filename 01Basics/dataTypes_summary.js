// Data Types 
// Data type ko data access karne ke tareeke pe classify kita jaata hai
// #Primitive
// 7categories:string,number,boolean,null,undefined,symbol(kisi bhi value ko unique banane ke liye),BigInt(bade integers value ke liye)
// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id==anotherId)//false
// const bigIntNo=123123123123123123123n//bigIntdatatype

// #Non-Primitive/Reference
//Arrays,Objects,Functions
// const heros = ["shaktimaan",'naagraj','doga']//array
// //object
// let myObj={
//     name:"Aashish",
//     age:19
// }
// //function
// const myFuction = function(){
//     console.log("Hello World!")
// }
//null ka typeof object aata hai

//A language is statically typed language if you have to define data type before assigning value.
//Java is dynamically typed language.

//*************Stack&HeapMemory**************//
//Stack=>Primitive Data Types

// let name="aashish"
// let name2=name
// console.log(name2)//aashish
// name2="aashishprofessionalcoder"
// console.log(name2)//aashishprofessionalcoder
// console.log(name)//aashish
// Isme name 2 change karne par name isliye change nahi hua kyunki copy pass hota hai name ka 


//Heap=>Non-Primitive Data Types

// let user1={
//     name:"Aashish"
// }
// let user2=user1
// user2.name="Aashishprofessionalcoder"
// console.log(user1,user2)
//isme user2 change karne par user1 bhi change hua kyunki reference pass hoti hai and heap me stored hota hai object ke content toh ek change hone par dono change ho jaate hai