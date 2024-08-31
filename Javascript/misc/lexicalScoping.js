//lexical scoping

function Outer() {
  let outValue = 200;

  function Inner() {
    let inValue = 20;
    console.log("Inner fun :", outValue);
  }
  Inner();
  //console.log("Outer fun :"inValue);  // varible defined in the function only access within it , means functional scoped
}
Outer();
