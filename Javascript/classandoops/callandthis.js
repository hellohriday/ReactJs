function setUsername(username) {
  this.username = username;
  console.log(username);
}

function createUser(username, email, password) {
  username = setUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@opmail.com", "djjkd");
console.log(chai);
