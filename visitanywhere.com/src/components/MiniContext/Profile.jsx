import React, { useContext } from "react";
import UserContext from "./context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>Welcome!! you email is:{user?.email}</h1>
    </div>
  );
}

export default Profile;
