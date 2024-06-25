// let myName = "Aashish     "

// console.log(myName.length)//12
// // For these cases we want to make a prototype named true length to tackle this problem

// let myHeros=['thor', 'spiderman']
// let heroPower = {
//     thor : "hammer",
//     spiderman : "sling",
//     getSpiderPower : function(){
//         console.log(`Spidey Power is ${this.spiderman}`)
//     }
// }

// // heroPower.Aashish()//error
// // Lets fix this by addidng Aashish function prototype to all Objects
// Object.prototype.Aashish = function(){
//     console.log("Aashish is presemt in all objects")
// }

// heroPower.Aashish()//Aashish is presemt in all objects

// //Adding prototype to String
// Array.prototype.heyAashish = function(){
//     console.log("Hey Aashish")
// }
// myHeros.heyAashish()//Hey Aashish
// // heroPower.heyAashish()//Error

// //Inheritance

// const User = {
//     name: "Aashish",
//     email: "aashish@mail.com"

// }
// const Teacher ={
//     makeVideo: true
// }
// const TeachingSupport ={
//     isAvailable: true
// }
// const TASupport={
//     makeAssignment:"JS assignment" ,
//     fullTime : true,
//     __proto__:TeachingSupport //Inheritance, TeachingSupport is the prototype of TASupport
// }

// //Modern way of inheritance
// Object.setPrototypeOf(TeachingSupport, Teacher)

//Back to solving main problem
let anotherUsername = " Aashish  "
String.prototype.trueLength = function(){
    return this.trim().length
}
console.log(anotherUsername.trueLength())//7
//All strings have this prototype now so can be accesed like this too
"aashish".trueLength()//7