import React from 'react';

export const Footer = ()=>{
    return(
        
      <footer id="footer" className="fixed-bottom" style={{'fontSize':'10'}}>
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>Rafael ID</span></strong>
        </div>
        <div className="credits"> Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
    )
}