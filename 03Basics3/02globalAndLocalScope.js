// if(true){
//     let a=10;
//     const b=20;
//     var c=30; //or c=30;
// }
// console.log(a);//error
// console.log(b);//error
// console.log(c);//works

//Local and global Scoping
// let a=100;
// const b=200;
// if(true){
//     let a=10;
//     const b=20;
//     console.log("Inner Scope: ",a,b);
// }
// console.log("Outer Scope: ",a,b);

//Scope Level and mini hoisting
//Example 1
function one(){
    const username='Aashish';
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);//error
    two();
}
one()//Aashish

//Example 2
if(true){
    const username='Aashish';
    if(username==="Aashish"){
        const website="youtube";
        console.log(username+website);
    }
    // console.log(website);//error
}
// console.log(username);//error

//Interesting Example
console.log(addOne(1));//2
function addOne(num){
    return num+1;
}

addTwo(1);//error
const addTwo=function(num){
    return num+2;
}