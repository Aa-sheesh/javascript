console.log(Math.PI); // 3.141592653589793
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor); // { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }

const chai = {
  name: "chai",
  price: 100,
  quantity: 10,
  chaiNahiBani: () => {
    console.log("Chai nahi bani");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name")); // { value: 'chai', writable: true, enumerable: true, configurable: true }
// Object.defineProperty(chai,"name",{
//     writable: false,
//     enumerable: false,
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name")); // { value: 'chai', writable: true, enumerable: true, configurable: true }

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
