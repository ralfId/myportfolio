import React from 'react'

export const Home = () => {
    return (
        <>
            {/* <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">
                    <h1>Alex Smith</h1>
                    <p>I'm <span className="typed" data-typed-items="Software Developer, Xamarin Forms Developer, .Net Core Developer"></span></p>
                </div>
            </section> */}
            <section id="hero">
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 ">
                    <h1>Rafael Ibañez Diego</h1>
                    <br/>
                    <span>
                        Sonsonate, El Salvador | (503) 7755 3265 | <a href="ralf_raid@outlook.es">ralf_raid@outlook.es</a>
                    </span>
                    <br/><br/><br/>
                    <p>
                        Hi! I'm Rafael, I have experience as a .Net Core, Xamarin Forms and React js developer.
                        I want to expand my professional career by joining your team as a Jr. developer where
                        I can implement and put my skills into practice.
                    </p>
                    
                </div>
                <div className="social-links mt-3 text-center">
              <a href="https://twitter.com/ralf_id" className="twitter" target="_blank" rel="noreferrer"><i className="bx bxl-twitter"></i></a>
              <a href="mailto:ralf_raid@outlook.es" className="mail" target="_blank" rel="noreferrer"><i class="bi bi-envelope"></i></a>
              {/* <a href="http://localhost:3000/index" className="instagram" target="_blank" rel="noreferrer"><i className="bx bxl-instagram"></i></a> */}
              <a href="https://www.linkedin.com/in/rafaelid" className="linkedin" target="_blank" rel="noreferrer"><i className="bx bxl-linkedin"></i></a>
            </div>
            </section>
        </>
    )
}
