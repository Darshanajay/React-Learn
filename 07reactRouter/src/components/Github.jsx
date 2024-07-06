import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const Github = () => {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Darshanajay")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className=" text-center m-4 bg-gray-600 text-white text-3xl p-4">
      Github Follwors: {data.created_at}
      <img src={data.avatar_url} alt="Git picture" width={400} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Darshanajay")
    return response.json()
}
