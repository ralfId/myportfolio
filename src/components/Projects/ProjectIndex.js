import React from 'react';

import { projects } from '../../data/projects'
import{ProjectItem} from '../Projects/ProjectItem'

export const ProjectIndex = () => {

    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Portfolio</h2>
                </div>
                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                    <ProjectItem />
                </div>

            </div>
        </section>
    )
}
