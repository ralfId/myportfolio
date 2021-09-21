import React from 'react'
import {  NavLink } from 'react-router-dom';

export const ProjectItem = ({ Id, Name, Category, image }) => {

    let catg = "";
    if (Category === 'App') {
        catg = "filter-app"
    } else {
        catg = "filter-web"
    }


    return (
        <>
            <div id={Id} className={`col-lg-4 col-md-6 portfolio-item ${catg}` }>
                <div className="card">
                    <div className="portfolio-wrap ">
                        <img src={image[0]} className="img-fluid" alt="" />
                    </div>
                    <div className="d-flex justify-content-between m-2 align-content-center">
                        <h5 className="card-title">{Name}</h5>
                        <NavLink to={`./item/${Id}`} ><i className="bi bi-plus-circle" style={{ "fontSize": "1.5rem" }}></i></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
