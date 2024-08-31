// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a, b, c);

// {}  --> scope
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // var c = 30;
  //-> let and const are blocked scoped
}

// console.log(a);
// console.log(b);
console.log(a);

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

function one() {
  const username = "hriday";

  function two() {
    const website = "youtube";

    console.log(username);
  }
  // console.log(website); // this line will give error so not further line of code will be executed
  two();
}
one();

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = "youtube";
    console.log(username + website);
  }
  console.log(website);
}
console.log(username);

// Type of declearing functions

// funOne()  //  funOne can be declared before function and after the function defination
function funOne(num) {
  return num + 2;
}

//funOne();

const funTwo = function (num) {
  return num + 1;
};

// funTwo();      funTwo can be decleared only after function defination
