import React from 'react';

export const Footer = ()=>{
    return(
        
      <footer id="footer" className="fixed-bottom">
      <div className="container">
        <div className="copyright"  style={{'fontSize':'10px'}}>
          &copy; Copyright <strong><span>Rafael ID</span></strong>
        </div>
        <div className="credits"  style={{'fontSize':'10px'}}> Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
    )
}