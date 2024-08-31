import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Github() {
  const { username } = useParams();

  const data = useLoaderData();

  // const [data, setData] = useState();
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // }, []);
  // console.log(data);

  return (
    <div className="text-center m-5 bg-gray-600 text-white p-4 text-3xl">
      Github followers:{data?.followers}
      <img
        className="text-center"
        src={data?.avatar_url}
        alt="gitpicture"
        width={300}
      ></img>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
