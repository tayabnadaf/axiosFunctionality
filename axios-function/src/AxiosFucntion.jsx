import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "./AxiosPost";
function AxiosFucntion() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get(url)
    .then((response) => {
      console.log(response);
      setUserData(response.data)
    }).catch((error)=>{
      console.log(`Error fetching data: ${error}`);
    });
  }, []);
  return (
    <div>
      {userData.map((data, index) => (
        <h3 key={index}>{data.name}</h3>
      ))}
    </div>
  );
}
// USEING GET METHOD
export default AxiosFucntion;
