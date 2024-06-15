//forEach doesnt return values
//map and filter return values apne aap
const myNums=[1,2,3,4,5,6,7,8,9,10];
// const newNums=myNums.forEach((num)=>num>5);
// console.log(newNums);//undefined
// const newNums2=myNums.filter((num)=>num>5);
// console.log(newNums2);//[6,7,8,9,10]
const newNums3=myNums.map((num)=>{ return num+10});
console.log(newNums3);//[11,12,13,14,15,16,17,18,19,20]