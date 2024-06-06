//Old Way to concatenate
const name="Aashish"
const power=100
// console.log(name+'power level is:'+power)

// //New way_String Interpolation-use back quotes `
// console.log(`${name} power level is:${power}`)

//To know all string methods, go to console and use this method to create a string
const string = new String("Aashish");
// string;
// then press the down arrow and see all the methods that you can use

//some string methods
// console.log(name.length)//7
// console.log(name.toUpperCase())//AASHISH
// console.log(name.toLowerCase())//aashish
// console.log(name.charAt(2))//s
// console.log(name.indexOf('s'))//s
// const anotherString1=string.substring(0,4)//aash
// console.log(anotherString1)
// const anotherString2=string.slice(-7,4)//aash
// console.log(anotherString2)
// const string2="      Aashish      "
// console.log(string2.trim())//Aashish
// const url="https://aashish.com/aashish%20singh"
// console.log(url.replace('%20','-'))//https://aashish.com/aashish-singh
// console.log(url.includes('oooolo'))//false
// console.log(url.split('/'))//[ 'https:', '', 'aashish.com', 'aashish%20singh' ]