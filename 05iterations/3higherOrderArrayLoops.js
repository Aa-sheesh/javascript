//Array types:
// ["","",""]//Strings
// [{},{},{}]//Objects

//Example1
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const num of arr) {
//     console.log(num)
// }
//Example2
// const greeting ="Hello World";
// for (const char of greeting) {
//     console.log(char)
// }

//MAPS
// const map=new Map();
// map.set('IN','India');
// map.set('USA','United States of America');
// map.set('FR','France');
// // console.log(map);//stores unique key value pairs in the same order
// for(const [key,value] of map){
//     console.log(key,'=>',value);
// }

//objects
// const myObj = {
//     js: 'JavaScript',
//     py: 'Python',
//     rb: 'Ruby',
//     swift: 'Swift'
// }

// for(const key in myObj){
//     console.log(key,myObj[key]);
// }

// const programming = ['JavaScript', 'Python', 'Ruby', 'Java', 'C++', 'PHP', 'Perl', 'C#'];
// for(const key in programming){
//     console.log(key,programming[key])
// }


const coding = ['JavaScript', 'Python', 'Ruby', 'Java', 'C++', 'PHP', 'Perl', 'C#'];
// Example1 Normal Function
// coding.forEach(function(item){
//     console.log(item)
// })
//Example 2 Arrow Function
// coding.forEach((item)=>{console.log(item)})

//Using External Function
// function print(item){
//     console.log(item)
// }
// coding.forEach(print)
//Example 3
// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
// })

//Example 4
const myCoding =[
    {
        languageName:'JavaScript',
        languageFileName:'js'
    },
    {
        languageName:'Python',
        languageFileName:'py'
    },
    {
        languageName:'Ruby',
        languageFileName:'rb'
    },
    {
        languageName:'Java',
        languageFileName:'java'
    },
    {
        languageName:'C++',
        languageFileName:'cpp'
    }
]
myCoding.forEach((item,index,arr)=>{
    console.log(item.languageName,index);
})
