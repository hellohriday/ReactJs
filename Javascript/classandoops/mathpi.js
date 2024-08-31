// console.log(Math.PI);   ////3.141592653589793
// Math.PI = 5;
// console.log(Math.PI);    ////3.141592653589793  value is not changed why?

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

const chai = {
  name: "ginger",
  price: 345,
  isAvailable: true,
};

// console.log(Object.getOwnPropertyDescriptor(chai, "price"));

Object.defineProperty(chai, "price", {
  writable: false,
  configurable: false,
});

chai.price = 342;
console.log(chai);
