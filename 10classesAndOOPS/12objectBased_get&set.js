const User = {
  _email: "a@as.com",
  _password: "123",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
  get password() {
    return `${this._password}abc123`;
  },
  set password(value) {
    this._password = value;
  },
};

const Aashish = Object.create(User);
console.log(Aashish.email); //A@AS.COM

console.log(User)