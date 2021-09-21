import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import raid from '../img/raid.png';

export const Nav = () => {

//   const [isToggle, setIsToggle] = useState(false);
  
// const toggleNavMob=()=>{
//   setIsToggle(!isToggle)
// }

  return (
    <>

      {/* <i className={`bi bi-list mobile-nav-toggle d-xl-none ${!isToggle ? "bi-list": "bi-x"} } `} onClick={toggleNavMob}></i> */}
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <header id="header">
        <div className="d-flex flex-column mb-auto">

          <div className="profile">
            <img src="/img/profile-img.png" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="index.html">Alex Smith</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="https://twitter.com/ralf_id" className="twitter" target="_blank" rel="noreferrer"><i className="bx bxl-twitter"></i></a>
              <a href="mailto:ralf_raid@outlook.es" className="mail" target="_blank" rel="noreferrer"><i class="bi bi-envelope"></i></a>
              {/* <a href="http://localhost:3000/index" className="instagram" target="_blank" rel="noreferrer"><i className="bx bxl-instagram"></i></a> */}
              <a href="https://www.linkedin.com/in/rafaelid" className="linkedin" target="_blank" rel="noreferrer"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li><Link to="/index" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></Link></li>
              {/* <li><Link to="/about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></Link></li> */}
              <li><Link to="/portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></Link></li>
              <li><Link to="/contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></Link></li>
            </ul>
          </nav>
        </div>
        
        
      </header>

    </>
  )
}
