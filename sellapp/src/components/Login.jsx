import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { BASE_URL } from '../config'
import Swal from 'sweetalert2'
function Login() {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
   function login(e){
  e.preventDefault();
  const send_out_data = {email , password};
  axios.post(`${BASE_URL}/login`, send_out_data).then(
    (response)=>{
      debugger
      Swal.fire({
        icon: 'success',
        title: `${response.data.result.message}`
      })
      console.log(response.data.result.token)
      localStorage.setItem("token",response.data.result.token)
    }
  ).catch((err)=>{
    Swal.fire({
      icon : "success",
      title: `${err.response.data.error}`
    })
  })
   }
  return (
    <div>
    <Navbar/>
    <h3 className='mt-3 text-center'>LOGIN FORM</h3>
    <form className='container'onSubmit={login} >
  <div className= " mb-3">
    <label for="InputEmail" className="form-label text-muted">Email</label>
    <input value={email} onChange = {(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="InputEmail" />
  
  </div>
  <div className="mb-3">
    <label for="InputPassword" className="form-label text-muted">Password</label>
    <input value = {password}  onChange = {(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="InputPassword"/>
  </div>

  <div className='d-grid'>
  <button type="submit"   className=" btn btn-primary">Submit</button>
  </div>
  
</form>
   
   </div>
  )
}

export default Login