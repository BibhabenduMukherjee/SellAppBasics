import React from 'react'
import Navbar from './Navbar'
import Swal from 'sweetalert2'
function Logout() {

  function signout(){
    localStorage.removeItem("token")
    Swal.fire({
      icon: "success",
      title : "Log Out Successful"
    })
  }
  return (
    <div>
    <Navbar/>
    <div className= 'container d-grid'>
    <button style={{color:'white'}} onClick= {signout} className=' bg-danger p-2 mt-4 rounded'>SignOut</button>
    </div>
   
   </div>
  )
}

export default Logout