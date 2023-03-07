import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { BASE_URL } from '../config'
import Swal from 'sweetalert2'
function Register() {

  const [firstname , setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  function register(){
    const send_out_data = {firstname,lastname,email,password}
    console.log(send_out_data)
    debugger
    axios.post(`${BASE_URL}/register` ,send_out_data).then
    ((response)=>{
    
      Swal.fire({
        icon: 'success',
        title: 'User successfully registered'
    })
    }).catch(err=>{
 
Swal.fire({
  icon:   'error',
  title: `${err.response.data.error}`
})
    })
  }
   
  return (
    <div>
    <Navbar/>
    <h3 className='mt-3 text-center'>REGISTER FORM</h3>


   <form className='container'>
  <div className= " mb-3">

  <label for="InputFirstName" className="form-label text-muted">FirstName</label>
    <input value={firstname} onChange={(e)=>{setFirstName(e.target.value)}} type="text" className="form-control" id="InputFirstName" />

    <label for="InputSecondName" className="form-label text-muted">LastName</label>
    <input value={lastname} onChange = {(e)=>{setLastName(e.target.value)}}  type="text" className="form-control" id="InputSecondName" />

    <label for="InputEmail" className="form-label text-muted">Email</label>
    <input value={email} onChange = {(e)=>{setEmail(e.target.value)}}  type="email" className="form-control" id="InputEmail" />
  
  </div>
  <div className="mb-3">
    <label for="InputPassword" className="form-label text-muted">Password</label>
    <input value={password} onChange = {(e)=>{setPassword(e.target.value)}}  type="password" className="form-control" id="InputPassword"/>
  </div>

  <div className='d-grid'>
  <button onClick={register}  type="button" className=" btn btn-primary">Submit</button>
  </div>
  
</form>
   </div>
  )
}

export default Register