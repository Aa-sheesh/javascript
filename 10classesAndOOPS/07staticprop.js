// Example 1
class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME: ${this.username.toUpperCase()}`);
  }
  static createId() {
    return `123`;
  }
}

const Aashish = new User("Aashish");
// console.log(Aashish.createId())//123
// Agar iss method ka acces object ko nahi dena toh static keyword lagado
// console.log(Aashish.createId())//error

// Example 2
class Teacher extends User {
  constructor(email, username) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@mail.com");
console.log(iphone.createId());//error because createId is static method