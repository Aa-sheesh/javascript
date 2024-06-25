function setUsername(username){
    //complex DB calls
    this.username = username;
}

function createUser(username,email, password){
    // setUsername(this.username);//isse ye call nahi hua function
    setUsername.call(this, username)
    this.username = username;
    this.password = password;
}
const Aashish = new createUser("Aashish","aashish@mail.com","123")
console.log(Aashish)