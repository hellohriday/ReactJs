import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import ColorButton from "./Components/ColorButton";
import PasswordGenerator from "./Components/PasswordGenerator";

function App() {
  const [colour, setColour] = useState("black");

  let colourlist = ["blue", "red", "green", "black", "white", "pink"];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: colour }}
    >
      <h2
        className="text-2xl text-center rounded"
        style={{ backgroundColor: "pink", color: "green" }}
      >
        BackGround Colour Change
      </h2>

      <PasswordGenerator />

      <div className="fixed flex flex-wrap justify-center gap-2  bottom-12 inset-x-0 px-2">
        {colourlist.map((element, index) => (
          <ColorButton key={index} color={element} setColour={setColour} />
        ))}
      </div>
    </div>
  );
}

export default App;
