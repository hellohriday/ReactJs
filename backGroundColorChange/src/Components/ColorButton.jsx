import React from "react";

const ColorButton = ({ color, setColour }) => {
  return (
    <div
      className="rounded"
      style={{ backgroundColor: color, borderColor: "black" }}
    >
      <button
        className="outline-none px-4 text-center"
        onClick={() => {
          setColour(color);
        }}
      >
        {color}
      </button>
      <br />
    </div>
  );
};

export default ColorButton;
