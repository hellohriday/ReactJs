// function sayMyName() {
//   console.log("hriday");
// }
// sayMyName();

function addTwoNumbers(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    console.log(`sum of two numbers is :${a + b}`);
  } else {
    console.log("Enter Number values");
  }
}

addTwoNumbers(3, 4);

function userLoginMessage(username = "") {
  if (!username) {
    // "" ,undefined ->false
    console.log(`Please enter a Username`);
  } else {
    console.log(`Just loggedIn:${username}`);
  }
}

userLoginMessage();

function checkRestOperator(val1, val2, ...rest1) {
  console.log(`Get Items:${rest1}`);
}

checkRestOperator("a", "b", "c", "d");

const User = {
  name: "hriday",
  salary2: "3000",
};

function viewDetails(anyObj) {
  console.log(`name is ${anyObj.name} and ${anyObj.salary}`);
}

viewDetails({
  name: "raj",
  salary: "399",
});

const UserLiset = ["hriday", "raj", "rohan"];

function viewDetailsList(anyArr) {
  console.log(`${anyArr}`);
}

// viewDetailsList(UserLiset);
viewDetailsList(["hritik", "raj", "rohan"]);

function UserDetails(u1, u2, ...uL) {
  console.log(`U1:${u1.name},U2:${u2.name},UAll:${uL[1].name}`);
}

UserDetails(
  { name: "Raj", Address: "mau" },
  { name: "Chand", Address: "noida" },
  { name: "ravi", Address: "noida" },
  { name: "abhi", Address: "noida" }
);
