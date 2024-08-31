//Immediately invoke function expressions

let temp = 200;

(function chai() {
  console.log("Db is connected");
})();

(() => {
  console.log("DB is connected two");
})();

((name) => {
  console.log(`DB is connected two -${name}`);
})("raj");

// NOTE :  here ;  semicolon is important

const testarr = [3, 4, 5, 6, 7];
if (testarr.length === 0) {
  console.log("arr is empty");
}

const testObj = {};
if (Object.keys(testObj).length === 0) {
  console.log("testObj is empty");
}

if (Array.isArray(testarr)) {
  console.log("testarr is Array");
}

// Nullish coalescing operator (??) null defined

let val4;
val4 = 5 ?? 10; // print val4 =5

val4 = null ?? 23; // print val4=23  .

//this is for to avoid null values

// terniary operator

// condition ? true : false;

// val4 == 5 ? console.log("value is 5") : console.log("value is not 5");

//// Loops
