function UserInfo() {
  let username = "hriday";
  function address() {
    let username = "raj";
    console.log(`Username is :${username}`); // closure concept , the function first look close variable values to it
  }

  return address;
}

const user = UserInfo();
user();
