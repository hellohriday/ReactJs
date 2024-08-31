class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username is ${this.username}`);
  }

  static createUniqueID() {
    this.uuId = Math.random;
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourses() {
    console.log(`new course was added by ${this.username}`);
  }
}

const t1 = new Teacher("chai", "chai@yopmail.com", "sf324");

console.log(t1);
t1.addCourses();
t1.createUniqueID(); //t1.createUniqueID is not a function
