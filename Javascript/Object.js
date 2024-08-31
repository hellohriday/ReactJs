//singleton

//Object.create()

const tinderUser = new Object();
tinderUser.name = "sham";
tinderUser.addressobj = new Object({
  address1: "343 northblock",
  address2: "futech gateway",
});
console.log(tinderUser);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "x", 4: "y" };
console.log(obj1 + obj2);

const obj3 = { obj1, obj2 };
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

console.log({ ...obj1, ...obj2 });

//object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "hriday",
  age: 25,
  address: "Noida",
  email: "hriday@fireFox.com",
  "full name": "kabir",
  [mySym]: "mysymbol1",
};
console.log("jsUser: ", jsUser);
console.log(jsUser.name);
console.log(jsUser["age"]); // two ways to get values from object
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
jsUser.greeting = function () {
  console.log("whooo");
};

jsUser.greetingTwo = function () {
  console.log(`hello mr, ${jsUser["name"]}`);
  console.log(`hello mr, ${this.name}`);
};

jsUser.greetingTwo();

//de-structuring

const users = {
  status: 200,
  message: "sucess",
  data: [
    { id: 1, name: "h" },
    {
      id: 2,
      name: "r",
    },
    {
      id: 3,
      name: "t",
    },
  ],
};

const { status: newParaName, message, data } = users;
console.log(newParaName);
console.log(message);
console.log(data);

console.log(`before declearation:${hriptr}`);
var hriptr = 32;
console.log(`after declearation:${hriptr}`);
