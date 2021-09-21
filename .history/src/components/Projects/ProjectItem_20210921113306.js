import React from 'react'
import { NavLink } from 'react-router-dom';

export const ProjectItem = ({ Id, Name, image, Description }) => {

    return (

        <div className={`col-lg-4 col-md-6 portfolio-item `}>
            <div className="card">
                <div className="portfolio-wrap ">
                    <img src={image[0]} className="img-fluid" alt="" />
                </div>
                <div className="d-flex justify-content-between m-2 align-content-center">
                    <h5 className="card-title">{Name}</h5>
                    <NavLink to={`./item/${Id}`} ><i className="bi bi-plus-circle" style={{ "fontSize": "1.5rem" }}></i></NavLink>
                </div>
                <p className="text-dark">{Description.descTitle}</p>
            </div>
        </div>
    )
}
