import React from "react";
import { CertificateItem } from "./CertificateItem";
import { EducationItem } from "./EducationItem";
import { WorkExperienceItem } from "./WorkExperienceItem";

export const Resume = () => {
    return (
        <>
            <section id="resume" className="resume px-2">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up">
                            <div>
                                <h3 className="resume-title">Education</h3>
                                <EducationItem />
                            </div>

                            <div style={{ marginTop: "3rem" }}>
                                <h3 className="resume-title">Certificates</h3>
                                <CertificateItem />
                            </div>

                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="resume-title">Professional Experience</h3>
                            <WorkExperienceItem />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}