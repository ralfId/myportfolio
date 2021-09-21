import React from "react";

export const Resume = () => {
    return (
        <>
            <section id="resume" class="resume p-2">
                <div class="container">

                    <div class="row">
                        <div class="col-lg-6" data-aos="fade-up">
                            <h3 class="resume-title">Education</h3>
                            <div class="resume-item">
                                <h4>Associate Degree Technician in Software
                                    Development Engineering</h4>
                                <p><em>Escuela Superior Franciscana Especializada/AGAPE</em></p>
                            </div>
                        </div>

                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 class="resume-title">Professional Experience</h3>
                            <div class="resume-item">
                                <h4>.Net and Xamarin Forms Developer intern</h4>
                                <h5>2019 </h5>
                                <p><em>San Salvador, El Salvador</em></p>
                                <ul>
                                    <li>Mobile application development with Xamarin Forms.</li>
                                    <li>Web development with ASP.Net Core MVC </li>
                                    <li>Software Testing</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}