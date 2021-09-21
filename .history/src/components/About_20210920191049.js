import React from 'react'
import { Resume } from './Resume'

export const About = () => {
    return (
        <>
            <section id="about" className="about">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-3" data-aos="fade-right">
                            <img src="../img/profile-img.png" className="img-fluid " alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>Software Developer.</h3>
                            <p className="fst-italic">
                                My name is Rafael, I have experience as a .Net Core, Xamarin Forms and React js developer.
                                I want to expand my professional career by joining your team as a Jr. developer where
                                I can implement and put my skills into practice.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+503 7755 3265</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Sonsonate, El Salvador</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Associate Degree</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>ralf_raid@outlook.es</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Resume/>
        </>
    )
}
