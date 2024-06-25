class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.group(`Course added by ${this.username}`);
  }
}

const Aashish = new Teacher("Aashish", "aashish@mail.com", "123");
Aashish.addCourse();
const Raja = new User("Raja");
Raja.logMe();
// Raja.addCourse();//error
Aashish.logMe()//Username: Aashish

console.log(Aashish instanceof Teacher);//true
console.log(Raja instanceof Teacher);//false
console.log(Aashish instanceof User);//true