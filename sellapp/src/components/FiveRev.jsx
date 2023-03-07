import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { BASE_URL } from '../config'
function FiveRev() {

   
   const [rev , setRev] = useState(0)
   useEffect(()=>{
    axios.get(`${BASE_URL}/rev`).then(
      (response)=>{
       
        setRev(response.data.result)
       
      }
    ).catch((err)=>{
      
    })
   },[])
  return (
    <div>
     <Navbar/>
     <h3 className = "text-center mt-2">Todays Revenue is {rev ? rev : 0}</h3>
    </div>
  )
}

export default FiveRev