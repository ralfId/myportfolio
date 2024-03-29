import React from 'react'

export const Home = () => {
    return (
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">
                   <h1>Rafael Ibañez Diego</h1>
                    <span>
                        Sonsonate, El Salvador | (503) 7755 3265 | <a href="mailto:ralf_raid@outlook.es">ralf_raid@outlook.es</a>
                    </span>
                    <br /><br /><br />
                    <p>
                        Hi! I'm Rafael, I have experience as a .Net Core, Xamarin Forms and React js developer.
                        I want to expand my professional career by joining your team as a Jr. developer where
                        I can implement and put my skills into practice.
                    </p>
                    <button className="btn btn-lg me-2">
                        <a href="https://drive.google.com/file/d/1IySFU30_59BW8qI8htdk_EsOi_3X1XD6/view?usp=sharing"  target="_blank" rel="noreferrer">
                            Resume ES  &nbsp; &nbsp;
                            <i className="bi bi-download"></i>
                        </a>
                    </button>

                    <button className="btn btn-lg">
                        <a href="https://drive.google.com/file/d/1SAsVOyUXNEwKg9K6LPoFR1YBLt9ph5zS/view?usp=sharing"  target="_blank" rel="noreferrer">
                            Resume EN  &nbsp; &nbsp;
                            <i className="bi bi-download"></i>
                        </a>
                    </button>
                </div>
            </section>
    )
}
