// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
// const myDate = new Date();
// console.log(myDate) //Output :2024-04-13T17:30:07.185Z
// // We can use various methods to convert this date into more readable value.
// console.log(myDate.toString()) //Output : Sat Apr 13 2024 23:00:07 GMT+0530 (India Standard Time)(Pacific Daylight Time)

// console.log(myDate.toLocaleString()) // Output : 13/4/2024, 11:00:07 pm
// console.log(myDate.toLocaleDateString()) //Output : 13/4/2024
// console.log(myDate.toLocaleTimeString()) // Output : 11:00:07 pm
// console.log(myDate.toDateString()) //Output : Sat Apr 13 2024
// console.log(myDate.toTimeString()) // Output : 23:00:07 GMT+0530 (India Standard Time)

// console.log(myDate.toISOString()) // Output : 2024-04-13T17:30:07.185Z
// console.log(myDate.toJSON()) //Output : 2024-04-13T17:30:07.185Z

// const myCreatedDate=new Date(2004,0,31)//YYYY,MM(0-11),DD,HH,MinMin
// console.log(myCreatedDate.toDateString())//Sat Jan 31 2004

//TIMESTAMPS
// let myTimeStamp=Date.now()
// console.log(myTimeStamp)//returns in milliseconds
// console.log(myDate.getTime())//returns in milliseconds

let newDate=new Date()
console.log(newDate.toLocaleString(
    'default',
    {weekday:"long"}
))//Saturday