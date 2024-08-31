import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Card2 from "./components/Card2";

function App() {
  const [count, setCount] = useState(0);

  const addNum = () => {
    if (count > 20) {
      alert("value can't be more then 20");
    } else {
      //setCount(count++); // wrong way
      setCount((preCount) => preCount + 1); // correct way using callback
      console.log("value added");
    }
  };

  let itemlist = ["tom", "jerry", "Picky"];

  let custmer = {
    name: "hriday",
    address: "MAU",
    company: "SEW",
  };
  return (
    <>
      <div>Hello World!!</div>
      <h2 className="bg-green-400">
        Show Count:
        {count}
      </h2>
      <button onClick={addNum}>Add Count</button>
      {count !== 0 && (
        <button
          onClick={() => {
            setCount((preCount) => preCount - 1);
            console.log("value removed");
          }}
        >
          Substract Count
        </button>
      )}

      <div className="container-center">
        {/* <Card /> */}
        <Card2 username="hriday" objlist={itemlist} />
        <Card2 custmer={custmer} />
      </div>
    </>
  );
}

export default App;
