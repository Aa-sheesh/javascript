// const tinderUser= new Object() // singleton object
// const tinderUser={}
// tinderUser.name='Aashish';
// tinderUser.age=18;
// tinderUser.id=1234;
// console.log(tinderUser);

// Object Nesting
// const user ={
//     name:'Aashish',
//     age:18,
//     email:'aashish@mail.com',
//     fullname:{
//         firstName:'Aashish',
//         lastName:'Singh'
//     },
//     }
// console.log(user.fullname?.firstName);

// Adding objects into objects
// const obj1 = {1: 'a', 2: 'b', 3: 'c'};
// const obj2 = {4: 'd', 5: 'e', 6: 'f'};
// const obj3 = {7: 'g', 8: 'h', 9: 'i'};
// const obj4 = {...obj1, ...obj2, ...obj3};//Way 1
// console.log(obj4);
// console.log(Object.assign({},obj1, obj2, obj3));//Way 2

// Objects in Arrays
// const users=[
//     {
//         name:'Aashish',
//         age:18,
//         email:'a@mail.com'
//     },
//     {
//         name:'Mummy',
//         age:18,
//         email:'m@mail.com'
//     }
// ]
// console.log(users[1].name);

//Object Keys, Values and hasOwnProperty
const users={
    name:'Aashish',
    age:18,
    email:'a@mail.com'
}
console.log(Object.keys(users));
console.log(Object.values(users));
console.log(Object.entries(users));
console.log(users.hasOwnProperty('name'));