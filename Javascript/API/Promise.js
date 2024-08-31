// Promise
// - Promise is an object representing the eventual completion or failure of an asynchronous operation.

// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Task completed for PromiseOne");
//   }, 3000);
// });

// promiseOne.then(function () {
//   console.log("promise One resolved");
// });

// const promiseTwo = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Task completed for PromiseTwo");
//     resolve();
//   }, 3000);
// });

// promiseTwo.then(function () {
//   console.log("promise Two resolved");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Task completed for PromiseThree");
//     resolve();
//   }, 3000);
// }).then(function () {
//   console.log("PromiseThree resolved");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Task completed for PromiseThree");
//     resolve({ username: "hriday", age: 23, Address: "Noida" });
//   }, 3000);
// }).then(function (user) {
//   console.log(user);
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Task completed for PromiseThree");
//     resolve({ username: "hriday", age: 23, Address: "Noida" });
//   }, 3000);
// })
//   .then(function (user) {
//     console.log(user);
//     return user.username;
//   })
//   .then(function (username) {
//     console.log(username);
//   });

// new Promise(function (resolve, reject) {
//   const Error = true;
//   setTimeout(function () {
//     if (!Error) {
//       console.log("Task completed for PromiseThree");
//       resolve({ username: "hriday", age: 23, Address: "Noida" });
//     } else {
//       reject({ status: 400, Message: "Bad Request" });
//     }
//   }, 3000);
// })
//   .then(function (user) {
//     console.log(user);
//     return user.username;
//   })
//   .then(function (username) {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("the promise is either resolved or rejected");
//   });

// const promiseFive = new Promise((resolve, reject) => {
//   const Error = true;
//   setTimeout(function () {
//     if (!Error) {
//       console.log("Task completed for PromiseThree");
//       resolve({ username: "hriday", age: 23, Address: "Noida" });
//     } else {
//       reject({ status: 400, Message: "Bad Request" });
//     }
//   }, 3000);
// });

// async function ConsumePromiseFive() {
//   try {
//     const respose = await promiseFive;
//     console.log(respose);
//   } catch (error) {
//     console.log(error);
//   }
// }
// ConsumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}
getAllUsers();

// fetch("https://api.github.com/users/hiteshchoudhary")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));
