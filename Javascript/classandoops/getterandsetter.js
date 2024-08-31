//// properties Getter and setter

// class User {
//   constructor(username, password) {
//     this.username = username;
//     this.password = password;
//   }

//   get username() {
//     return this._username;
//   }

//   set username(value) {
//     this._username = value;
//   }

//   get password() {
//     return this._password.toUpperCase();
//   }

//   set password(value) {
//     this._password = value;
//   }
// }

// const u1 = new User("hriday", "3432abh");
// console.log(u1._password);
// console.log(u1._username);

//// Object Getter and setter

const user = {
  _email: "chai@yopmail.com",
  _password: "admin",

  get getemail() {
    return this._email;
  },
  set setemail(value) {
    this._email = value;
  },

  get getpassword() {
    return this._password;
  },
  set setpassword(value) {
    this._password = value;
  },
};

user.setpassword("jaishah@yopmail.com");

console.log(typeof user.email);
