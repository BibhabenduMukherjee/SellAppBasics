import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {

    const location = useLocation()
    const path = location.pathname.split('/')[1]
  return (
    <div>
 
 <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/">SALES APP</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className= {path === "addsales" ? "nav-link  ac" : "nav-link dc"} aria-current="page" href="/addsales">ADD SALES</a>
        </li>
        <li className="nav-item">
          <a className={path === "sales" ? "nav-link ac" : "nav-link dc "} href="/sales">TOP 5 SALES</a>
        </li>
        <li className="nav-item">
          <a className={path === "rev" ? "nav-link ac" : "nav-link dc "} href="/rev">TODAY'S TOTAL REVENUE</a>
        </li>
        <li className="nav-item">
          <a className={path === "register" ? "nav-link ac" : "nav-link dc"}  href="/register">REGISTER</a>
        </li>
        <li className="nav-item">
          <a className={path === "login" ? "nav-link ac" : "nav-link dc"}  href="/login">LOGIN</a>
        </li>
        <li className="nav-item" >
          <a className={path === "logout" ? "nav-link ac" : "nav-link dc"} href="/logout">LOGOUT</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

{/* 
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav> */}


    </div>
  )
}

export default Navbar