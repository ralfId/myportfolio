import React, {useEffect, useState } from 'react';

import { projects } from '../../data/projects'
import{ProjectItem} from '../Projects/ProjectItem'

export const ProjectIndex = () => {

    const [isotope, setIsotope] = useState(null);
    const [filterKey, setIsotope] = useState('*');

    useEffect(()=>{
        setIsotope(
            new Isotope('.portfolio-container',{
                itemSelector: '.portfolio-item'
            })
        )
    });

    useEffect(()=>{
        if (isotope) {
            filterKey === '*'
            ? isotope.arrange({filter:'*'})
            : isotope.arrange({filter: `.${filterKey}`})
        }
    }, [isotope, filterKey])
    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Portfolio</h2>
                </div>

                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                    {
                        projects.map(proj => (<ProjectItem key={proj.Id} {...proj} />))
                    }
                </div>

            </div>
        </section>
    )
}
