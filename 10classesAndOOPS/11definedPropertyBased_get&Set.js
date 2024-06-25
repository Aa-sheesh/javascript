//When getters and setters were not defined in JS, the properties were accessed directly. But now, we can define getters and setters for the properties. This is done using Object.defineProperty() method. This method takes 3 arguments: the object, the property name and the object with get and set methods. The get method is called when the property is accessed and the set method is called when the property is set. The get method returns the value of the property and the set method sets the value of the property. The get and set methods are defined in the object passed as the third argument to the Object.defineProperty() method. The get and set methods are defined as functions in the object. The get method does not take any arguments and the set method takes the value to be set as the argument

//Defined property based getter and setter
function User(email, password) {
  this._email = email;
  this._password = password;
    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this.email=value;
        }
    })
    Object.defineProperty(this, "password", {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this.password=value;
        }
    })

}

const Aashish = new User("aashish@mail.com","123");
console.log(Aashish.email); //AASHISH@MAIL.COM
console.log(Aashish.password); //123abc123
