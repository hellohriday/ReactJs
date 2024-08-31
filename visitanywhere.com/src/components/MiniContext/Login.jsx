import React, { useContext, useState } from "react";
import UserContext from "./context/UserContext";
import Profile from "./Profile";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  return (
    <>
      <div className="text-center bg-gray-500">
        <h2 className="text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 underline">
          Login
        </h2>
        <input
          className="font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
          type="text"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          maxLength={50}
        />
        <input
          className="font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          maxLength={50}
        />
        <button
          className="bg-pink-300 
      hover:bg-orange-600 focus:ring-2
      font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          onClick={(e) => {
            // e.preventDefault();
            if (email === "admin" && password === "hri123") {
              setUser({ email, password });
              alert("login successfully");
            } else {
              setUser("", "");
              alert("Incorrect Email and Password");
            }
          }}
        >
          Sign In
        </button>
      </div>
      <Profile />
    </>
  );
}

export default Login;
