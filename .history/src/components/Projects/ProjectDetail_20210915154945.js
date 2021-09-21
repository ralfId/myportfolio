import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { Link } from 'react-router-dom';

import { getProjectById } from '../../helpers/ProjectById'

export const ProjectDetail = () => {



    const { Id: projectId } = useParams();

    const projectDetails = useMemo(() => getProjectById(projectId), [projectId]);


    if (!projectDetails) {
        return <Redirect to="/" />
    }

    const {
        Id,
        Category,
        urlGithub,
        urlWeb,
        Name,
        Description,
        techItem,
        Categ_type
    } = projectDetails;
    console.log(Category)

    return (
        <div id={Id}>
            <div id="breadcrumbs" className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="">Project information</h2>

                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li>Project Details</li>
                        </ol>
                    </div>

                </div>
            </div>


            <div id="portfolio-details" className="portfolio-details">
                <div className="container">

                    <div className="row gy-4">
                        <div className="col">
                            <div className="portfolio-info">
                                <ul>
                                    <li><strong>Name</strong>: {Name}</li>
                                    {
                                        (Category === "App")
                                            ? <li><strong>Type</strong>: {Categ_type}</li>
                                            : null

                                    }
                                    <li><strong>Github</strong>:<a href={urlGithub} target="_blank" rel="noopener noreferrer"> {urlGithub}</a> </li>
                                    {
                                        (urlWeb !== '')
                                            ? <li><strong>Project URL</strong>: <a href={urlWeb} target="_blank" rel="noopener noreferrer"> {urlWeb}</a></li>
                                            : null
                                    }
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="row mb-3">
                        <div className="portfolio-description">
                            <h3>{Description.descTitle}</h3>
                            <p>{Description.descBody}</p>
                        </div>
                    </div>
                    <div className="row porfolio-container">
                        {
                            techItem.map(item => (
                                <div key={item} className=" portfolio-item w-auto mb-3">
                                    <div className="card pt-2 px-2 border-secondary">
                                        <h5 className="card-title">{item}</h5>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
