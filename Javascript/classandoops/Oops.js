// // object literal
// const user = {
//   // object fields
//   username: "hriday",
//   loginCount: 2,
//   signedIn: true,

//   getUserDetails: function () {
//     console.log(`User name is :${this.username}`);
//     console.log(this);
//   },
// };

// user.getUserDetails();

function user(username, logincount, isloggedIn) {
  this.username = username;
  this.logincount = logincount;
  this.isloggedIn = isloggedIn;

  this.greeting = function () {
    console.log(`username is :${this.username}`);
  };

  return this; // it is returned implicitly
}

user.prototype.printUsername = function () {
  console.log(this.username);
};

user.prototype.GetTrimUsername = function (res) {
  return;
};

const userOne = new user("hri", 33, false);
const userTwo = new user("raj", 2, true);

console.log(userOne);
console.log(userTwo);
userTwo.greeting();
userTwo.printUsername();

// function,array,string  ========>  Object ==>NULL

const heroList = ["thor", "spiderman", "krish"];
const heroList2 = ["Hanuman", "laxman", "ravan"];
const Power = {
  thor: "hammer",
  krish: "mask",
};

Object.prototype.ShowItem = function () {
  console.log(`Items are :${this}`);
};

Array.prototype.GetFirstItem = function () {
  console.log(`Get first Item:${this[0]}`);
};

// heroList2.prototype.addToLast = function (item) {
//   // this.push(item);
//   console.log(`Item inserted :${item}`);
// };

heroList.ShowItem();
Power.ShowItem();
heroList.GetFirstItem();
heroList2.GetFirstItem();
//heroList2.addToLast("dummy"); // Error Cannot set properties of undefined

//  inheritance

const Car = {
  break: "power break",
  accelator: "avaiable",
  gearBox: "available",
};

const redCar = {
  isAvaiable: true,
  color: "red",
};

const BlueCar = {
  isAvaiable: false,
  color: "blue",
};
BlueCar.__proto__ = Car;

// modern syntex
Object.setPrototypeOf(redCar, Car);

console.log(BlueCar);
console.log(redCar.accelator);

const UtilityName = "   American Water ";

// console.log(UtilityName.trim());

String.prototype.trueLength = function () {
  return this.trim();
};
console.log(UtilityName.trueLength());
