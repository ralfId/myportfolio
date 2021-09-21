import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {

  const [isClicked , setIsClicked ] = useState(false)

 const changeState=()=>{
   setIsClicked(!isClicked);
 }
  return (
    <>

      <i className={`bi bi-list mobile-nav-toggle d-xl-none ${!isClicked ? 'bi-list' : 'bi-x'}`} onClick={changeState}></i>

      <header id="header" className={`${isClicked ?? 'navbar'}`}>
        <div className="d-flex flex-column">

          <div className="profile">
            <img src="/img/profile-img.png" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="index.html">Rafael Ibañez</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="https://twitter.com/ralf_id" className="twitter" target="_blank" rel="noreferrer"><i className="bx bxl-twitter"></i></a>
              <a href="mailto:ralf_raid@outlook.es" className="mail" target="_blank" rel="noreferrer"><i className="bi bi-envelope"></i></a>
              <a href="https://github.com/ralfId" className="instagram" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
              <a href="https://www.linkedin.com/in/rafaelid" className="linkedin" target="_blank" rel="noreferrer"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li id="#home"><Link to="/index" className="nav-link  active"><i className="bx bx-home"></i> <span>Home</span></Link></li>
              <li><Link to="/about" className="nav-link "><i className="bx bx-user"></i> <span>About</span></Link></li>
              <li><Link to="/portfolio" className="nav-link "><i className="bx bx-book-content"></i> <span>Portfolio</span></Link></li>
            </ul>
          </nav>
        </div>
        
        
      </header>

    </>
  )
}
