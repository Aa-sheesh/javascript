//forEach doesnt return values
//map and filter return values apne aap
const myNums=[1,2,3,4,5,6,7,8,9,10];
// const newNums=myNums.forEach((num)=>num>5);
// console.log(newNums);//undefined
// const newNums2=myNums.filter((num)=>num>5);
// console.log(newNums2);//[6,7,8,9,10]
// const newNums3=myNums.map((num)=>{ return num+10});
// console.log(newNums3);//[11,12,13,14,15,16,17,18,19,20]

// //chaining
// const newNums=myNums
//                     .map((num)=>{ return num*10})
//                     .map((num)=>num+1)//the answer of first chain will be passed to the second chain
//                     .filter((num)=>num>20);
// console.log(newNums);//[21,31,41,51,61,71,81,91,101]

//reduce
// const arr=[1,2,3,4,5,6,7,8,9,10];
// const initialValue=0;
// const sumWithInitial=arr.reduce(
//     (accumulator,currentValue)=>accumulator+currentValue,initialValue
// );
// console.log(sumWithInitial);//55
//Example 1
const shoppingCart=[
    {product:'phone',price:70000},
    {product:'laptop',price:90000},
    {product:'earphones',price:1000},
]
const totalAmount=shoppingCart.reduce((acc,curr)=>acc+curr.price,299);
console.log(totalAmount);//161999