//Getter and Setter in JavaScript
//Getter and Setter are used to get and set the value of an object.
// It is used to control the access of an object.
//
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  //Getter
  get email() {
    return this._email.toUpperCase();
  }
  get password() {
    return `${this._password}abc123`; //This is a way to add some extra value to the password and return it.
  }
  //Setter
  set email(email) {
    this._email = email;
  }
  set password(password) {
    this._password = password;
  }
}

const Aashish = new User("aashish@mail.com","123");
console.log(Aashish.email); //AASHISH@MAIL.COM
console.log(Aashish.password); //123abc123