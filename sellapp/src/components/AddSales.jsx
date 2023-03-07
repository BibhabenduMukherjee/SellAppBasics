import React, { useState } from 'react'
import Navbar from './Navbar'
import { BASE_URL } from '../config';
import axios from 'axios';
import Swal from 'sweetalert2'
function AddSales() {

  const [quantity, setQuantity] = useState(0);
  const [productname, setProduct] = useState("");
  const [amount, setAmount] = useState(0);
  const CONFIG_OBJ = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  }

  function addSales(){
  
    const send_out_data = {
      productname,quantity,amount
    
    }
    console.log(localStorage.getItem("token"));
    debugger
   
     axios.post(`${BASE_URL}/addsales` ,send_out_data ,CONFIG_OBJ).then
     ((response)=>{
      debugger
      Swal.fire({
        icon: 'success',
        title: `${response.data.result}`
    })
      // console.log(response)
     }).catch(err=>{
      debugger
      Swal.fire({
        icon: 'error',
        title: `${err.response.data.error}`
    })
      console.log(err)
     })
  }

  return (
    <div>
    <Navbar/>
    <div className = 'container'>
      <h3 className='mt-3 text-center'>ADD SALE ENTRY</h3>
      <form>
  <div className="mb-3">
    <label htmlFor="InputProductName" className="form-label text-muted">Product Name</label>
    <input value={productname} onChange= {(e)=>{setProduct(e.target.value)}} type="text" className="form-control" id="InputProductName" />
  
  </div>
  <div className="mb-3">
    <label  htmlFor="InputQuantity" className="form-label text-muted">Quantity</label>
    <input value={quantity} onChange= {(e)=>{setQuantity(e.target.value)}} type="text" className="form-control" id="InputQuantity"/>
  </div>

  <div className="mb-3">
    <label htmlFor="InputAmount" className="form-label text-muted">Amount</label>
    <input value={amount} onChange= {(e)=>{setAmount(e.target.value)}} type="text" className="form-control" id="InputAmount"/>
  </div>
  <div className='d-grid'>
  <button onClick={addSales} type="button" className=" btn btn-primary">Submit</button>
  </div>
  
</form>
    </div>
   </div>
  )
}

export default AddSales