import axios from 'axios'
import React from 'react'

function Inteceptor() {
    axios.interceptors.request.use((request)=>{
        console.log(request);
    })
  return (
    <div>Inteceptor</div>
  )
}

export default Inteceptor