import React from 'react';
import educationArr from '../../data/education.json'

export const EducationItem = () => {
    return (
        <>
            {
                educationArr.map(edu => (

                    <div className="resume-item">
                        <h4>{edu.Title}</h4>
                        <p><em>{edu.Place}</em></p>
                        <h5>{edu.Year}</h5>
                    </div>
                ))
            }

        </>
    )
}
