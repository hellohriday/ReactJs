// const array = [1, 2, 3, 4, 5];
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(element);
// }

const arrtest = [12, 23, 34, 45, 56];
// for (let index = 0; index < arrtest.length; index++) {
//   console.log(arrtest[index]);
// }

// let index = 0;
// while (index < arrtest.length) {
//   console.log(arrtest[index]);
//   index++;
// }

// do {
//   console.log(arrtest[index]);
//   index++;
// } while (index < arrtest.length);

const result = arrtest.forEach(function (val, idx, arr) {
  console.log(`Value at index:${idx}:${val}, and array :${arr}`);
  val = val * 2;
});
console.log(result); // forEach return nothing , result is undefined

const MapResult = arrtest.map((val, idx, arr) => {
  console.log(`Value at index:${idx}:${val}, and array :${arr}`);
  return val * 2;
});
console.log(MapResult); //The map method creates a new array populated with the results

const FilterResult = arrtest.filter((val, idx, arr) => {
  console.log(`Value at index:${idx}:${val}, and array :${arr}`);
  return val > 30;
});
console.log(FilterResult);

const ReducerResult = arrtest.reduce((acc, curr, currIdx, arr) => {
  console.log(
    `Value at acc:${acc}, current:${curr}, currentIndex:${currIdx} and array :${arr}`
  );
  return acc + curr;
}, 0);
console.log("sum of all element: " + ReducerResult);

// // while loop

// let counter = 0;
// while (counter < 100) {
//   console.log(counter);
//   counter++;
// }

// do-while loop
// let counter = 0;
// do {
//   console.log(counter);
//   counter++;
// } while (counter < 100);

// // map

// const map = new Map();

// map.set("IN", "India");
// map.set("AU", "Australia");
// map.set("USA", "United states of America");
// map.set("UK", "United Kingdom");

// //console.log(map);

// for (const value of map) {
//   console.log(value);
// }

// for (const iterator of map) {
//   console.log(iterator[0], iterator[1]);
// }

// for (const [key, value] of map) {
//   console.log(key, value);
// }

// const myObj = {
//   game1: "NFS",
//   game2: "spiderman",
// };
//myObj is not iterable using for-of
// for (const value of myObj) {
//   console.log(value);
// }

// for (const key in myObj) {
//   if (Object.hasOwnProperty.call(myObj, key)) {
//     const element = myObj[key];
//     console.log(key, element);
//   }
// }

// forin is not iterable in map()

// const coding = ["js", "cpp", "java", "rb", "py"];

// coding.forEach((value, index) => {
//   console.log(value, index);
// });

// coding.map(function (value, index) {
//   console.log(value, index);
// });

// coding.map((value, index) => {
//   console.log(value, index);
// });

// coding.forEach(printMe); // passing function 's reference not calling the function here, only providing callbacks

// function printMe(value, index, arr) {
//   console.log(value, index, arr);
// }

// const myCoding = [
//   {
//     languageName: "JavaScript",
//     languageFileName: "js",
//   },
//   {
//     languageName: "java",
//     languageFileName: "java",
//   },
//   {
//     languageName: "python",
//     languageFileName: "py",
//   },
// ];

// myCoding.forEach((item, index) => {
//   console.log(item.languageName, item.languageFileName);
// });

// filter, map and reduce

// Condition on the array will not be allowed in forEach

// filter  returns a empty []

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8];

// const ans = myNums.filter((item) => {
//   return item % 2 != 0;
// });

// console.log(ans);

const students = [
  {
    name: "ravi",
    age: 10,
    marks: 40,
    subject: "science",
  },
  {
    name: "sonu",
    age: 12,
    marks: 30,
    subject: "Match",
  },
  {
    name: "komal",
    age: 9,
    marks: 23,
    subject: "hindi",
  },
  {
    name: "rakesh",
    age: 9,
    marks: 43,
    subject: "science",
  },
];

const sciStu = students.filter((item) => item.subject === "science");
console.log(sciStu);

// const AgeAbove10Stu = students.filter((item) => item.age > 10);
// console.log(AgeAbove10Stu);

// return only names
// const AgeAbove10Stu = students.filter((item) => {
//   return item.age > 13;
// });
// console.log(AgeAbove10Stu);

// const improvedMarkStu = students.map((item) => {
//   if (item.age < 10) {
//     item.marks += 10;
//   }
//   return item;
// });

// console.log(improvedMarkStu);

//chaining

const locationCode = [2034, 4543, 5365, 2322, 4555, 3433];

const updatedlocationCode = locationCode
  .map((code) => code * 10)
  .map((code) => "ISD- " + code);
console.log(updatedlocationCode);

// for,while,do-while, forof, forin, forEach,filter,map,reduce,yield

// reduce -performing operations like summing values, finding averages, or combining values in some way.

const arr1 = [1, 2, 3, 4, 5, 6];

const counts = [1, 2, 3, 4, 5];

const initialvalue = 0;
const sumofCounts = counts.reduce((acc, curr, idx) => {
  return acc + curr;
}, initialvalue);

console.log(sumofCounts);

// added total marks of all stud

const TotalMarkOfAllStd = students.reduce((acc, item) => {
  return acc + item.marks;
}, 0);

console.log(TotalMarkOfAllStd);

students.length;

function* GeneratorFun() {
  for (const values of students) {
    yield values;
    //console.log(values);
  }
}

const callGeneratorFun = GeneratorFun();

console.log(callGeneratorFun.next()); //{
//   value: { name: 'rakesh', age: 9, marks: 43, subject: 'science' },
//   done: false
// }
console.log(callGeneratorFun.next().value); //{ name: 'ravi', age: 10, marks: 40, subject: 'science' }
console.log(callGeneratorFun.next().done); //{ name: 'ravi', age: 10, marks: 40, subject: 'science' }
console.log(callGeneratorFun.next()); //{ value: undefined, done: true }
