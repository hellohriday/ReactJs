// this keyword
// -->   this referce to currect contexts

const user = {
  username: "hriday",
  price: "999",

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
  },
};

user.welcomeMessage();
user.username = "raj";
user.welcomeMessage();

// function chai() {
//   let username = "raj";
//   console.log(this.username);   // log will be undefined because this does not work in function
// }
// chai();

// The line console.log(this.username); will output undefined because this refers to the global object, which does not have a property username.

const chai = () => {
  let username = "raj";
  console.log(this.username); // log will be undefined because this does not work in function
};
chai();

const addTwo = (num1, num2) => num1 + num2; // implicit  return
console.log(addTwo(3, 4));

const addThree = (num1, num2) => ({ username: "hriday", price: "33" }); // implicit  return
console.log(addThree(3, 4));

// This works due to hoisting
FunType1(1, 2);

// These will throw an error if called before their declaration
// FunType2(1, 2);
// FunType3(1, 2);

function FunType1(a, b) {
  const username = "raj";
  console.log(`Function Type 1 called:${this.username}`);
}

const FunType2 = (a, b) => {
  const username = "raj";
  console.log(`Function Type 2 called:${this.username}`);
};

const FunType3 = function (a, b) {
  const username = "raj";
  console.log(`Function Type 3 called:${this.username}`);
};

FunType2(1, 2);
FunType3(1, 2);

const user2 = {
  username: "raj",
  GetUsernameRegular: function () {
    console.log(`GetUsernameRegular called:${this.username}`); //
  },
  GetUsernameArrow: () => {
    console.log(`GetUsernameArrow called:${this.username}`);
  },
};

user2.GetUsernameRegular();
//These functions are called as methods of the user object, so this refers to user, and this.username is "raj".

user2.GetUsernameArrow();
//As an arrow function, GetUsernameArrow inherits this from its defining lexical scope, which is likely the global scope, so this.username is undefined.
