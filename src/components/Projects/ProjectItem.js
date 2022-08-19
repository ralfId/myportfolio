import React from 'react'
import { NavLink } from 'react-router-dom';
import { projects } from '../../data/projects'

export const ProjectItem = () => {

    return (

        <>
            <div className="row d-flex align-items-stretch justify-content-start card-deck ms-0 ">
                {
                    projects.map(item => (
                        <div key={`${item.name}${item.Id}`} className="col-lg-4 col-md-3  " style={{ maxHeight: "12rem", minHeight: "10rem", marginBottom: "10rem" }} >
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between m-2 align-content-center align-items-center">
                                        <h3 className="card-title">{item.Name}</h3>
                                    </div>
                                    <p><strong>Type:</strong> {item.Description.descTitle}</p>
                                    <p><strong>Category:</strong> {item.Category}</p>
                                    <p>{item.Description.descBody.slice(0, 50)} <a href={item.urlGithub} target="blank">...view more</a></p>
                                    <div className="d-flex mt-5 bottom-100 ">
                                        {
                                            (item.urlGithub) &&
                                            <div className=" d-flex ">
                                                <a href={item.urlGithub} target="_blank">
                                                    <button type="button" className="btn btn-labeled btn-outline-secondary" >
                                                        <span className="btn-label"><i className="bx bx-code"></i></span>Code
                                                    </button>
                                                </a>


                                            </div>
                                        }
                                        {
                                            (item.urlWeb) &&
                                            <div className="col d-flex align-content-center justify-content-center">
                                                <a className=" ms-2" href={item.urlWeb} target="_blank">
                                                    <button type="button" className="btn btn-labeled btn-outline-secondary" >
                                                        <span className="btn-label"><i className="bx bx-window-alt"></i></span>Web site
                                                    </button>
                                                </a>
                                            </div>
                                        }
                                    </div>
                                </div>



                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
