import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
// topfivesale
import axios from 'axios'
import { BASE_URL } from '../config'


function FiveSales() {
   const [data , setData] = useState([])
   const [count  , setCount] = useState(0)
    useEffect(()=>{
      axios.get(`${BASE_URL}/topfivesale`).then(
        (response)=>{
          debugger
         
         setData(response.data.result)
        
        }
      ).catch((err)=>{
       
      })
    },[])

  return (
    <div>
     <Navbar/>
     <div className='container'>
     <h3 className='mt-3 text-center'>TOP 5 SALES</h3>
     <table className="table mt-2">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Sales Id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Amount</th>

    </tr>
  </thead>
  <tbody>

       {data.map((record,index)=> (
        
          
          
          <tr key={record._id}>
          
          <th scope="row">{index+1}</th>
          <td>{record.product_id}</td>
          <td>{record.productname}</td>
          <td>{record.quantity}</td>
          <td>{record.amount}</td>
          </tr>
        
       ))}

  </tbody>
</table>
     </div>
    </div>
  )
}

export default FiveSales