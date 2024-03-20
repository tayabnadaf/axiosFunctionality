import axios from "axios";
import React, { useState } from "react";

export const url = "https://jsonplaceholder.typicode.com/users";
function AxiosPost() {
  const initialData = { fname: "", lname: "" };
  const [inputData, setInputData] = useState(initialData);
  const [submittedData,setSubmittedData]=useState([]);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit(){
    axios.post(url, inputData).then((response) => {
      console.log(response);
      setSubmittedData([...submittedData,inputData])
      setInputData(initialData);
    });
    
  }

  function handleUpdate(){
    axios.put("https://jsonplaceholder.typicode.com/users/1",inputData).then((response) => {
      console.log(response);
      setSubmittedData([...submittedData,inputData])
      setInputData(initialData);
    });
  }

  function handleDelete(){
    axios.delete("https://jsonplaceholder.typicode.com/users/1").then((response) => {
      console.log(response);
      setSubmittedData([...submittedData,inputData])
      setInputData(initialData);
    });
  }

  return (
    <div>
      <label>First Name</label>
      <input
        type="text"
        name="fname"
        value={inputData.fname}
        onChange={handleData}
      />
      <br />
      <label>Last Name</label>
      <input
        type="text"
        name="lname"
        value={inputData.lname}
        onChange={handleData}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>

      <div>
      {submittedData.map((data,index)=>(
        <div key={index}>{data.fname}{data.lname}</div>
      ))}
      </div>
    </div>
  );
}

export default AxiosPost;
