import React from 'react'
import Navbar from './Navbar'
import "./Home.css"
function Home() {
  return (
    <div>
     <Navbar/>
     <div className=' home d-flex justify-content-center '>
      <p>–––Welcome To The Sales App–––</p>
     </div>
   </div>
  )
}

export default Home