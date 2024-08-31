import React, { useCallback, useEffect, useRef, useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [length, setLength] = useState(8);

  // useRef to provide the reference
  const passwordRef = useRef(null);

  // useCallback is to memoise and optimise the method calling by it

  const GeneratePasswordFun = useCallback(() => {
    console.log("callback called");
    let alpha = "ABCDEFGHIJKMLNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let character = "!@#$%&^*(){}";
    let str = alpha;
    if (isNumAllowed) str += num;
    if (isCharAllowed) str += character;

    let newpassword = "";
    for (let index = 1; index <= length; index++) {
      let idx = Math.floor(Math.random() * str.length + 1);
      newpassword += str.charAt(idx);
    }

    setPassword(newpassword);
  }, [length, isNumAllowed, isCharAllowed]);

  useEffect(() => {
    GeneratePasswordFun();
  }, [length, isNumAllowed, isCharAllowed]);

  return (
    <>
      <div className="flex shadow rounded-lg justify-center overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          id="passText"
          placeholder="password"
          //onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef}
          readOnly
        ></input>
        <button
          className="text-white border-spacing-1"
          style={{ backgroundColor: "blue", borderColor: "black" }}
          onClick={() => {
            console.log("password copied", passwordRef);
            passwordRef.current?.select();
            passwordRef.current?.setSelectionRange(0, password.length);
            navigator.clipboard.writeText(password);
          }}
        >
          Copy
        </button>
        <div>
          <input
            className=""
            type="Range"
            value={length}
            placeholder="password"
            min={8}
            max={20}
            onChange={(e) => setLength(e.target.value)}
          ></input>
          <label className="text-white">length:{length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultValue={isNumAllowed}
            id="allownumber"
            onChange={(e) => {
              console.log(e.target.checked);
              setIsNumAllowed((prev) => !prev);
            }}
          ></input>
          <label className="text-white">AddNumber</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultValue={isCharAllowed}
            id="allowchar"
            onChange={(e) => {
              console.log(e.target.checked);
              setIsCharAllowed((prev) => !prev);
            }}
          ></input>
          <label className="text-white">AddCharacters</label>
        </div>
      </div>
    </>
  );
}
