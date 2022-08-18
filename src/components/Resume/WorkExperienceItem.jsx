import React from 'react'
import experience from "../../data/experience.json";

export const WorkExperienceItem = () => {

    const expArr = experience.filter(x => x.id !== 0);

    return (
        <>

            {
                expArr.map(exp => (
                    <div className="resume-item">
                        <h4>{exp.Title}</h4>
                        <h5><em>{exp.Company}</em></h5>
                        <br />
                        {
                            (exp.Client !== "" && exp.Client) &&
                            <>
                                <h5><em>{exp.Client}</em></h5>
                                <br />
                            </>

                        }
                        <h5>{exp.Year1} </h5>
                        <p><em>{exp.Place}</em></p>

                        <ul>
                            {
                                exp.WorkTasks.map(task => (<li> {task}</li>))
                            }
                        </ul>
                    </div>
                ))
            }

        </>
    )
}
