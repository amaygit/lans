import "./WorkCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"
const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="img"/>
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>
            {props.text}
        </p>
        <div className="pro-btns">
            <NavLink to={props.view} className="btn">
                View
            </NavLink>
            <NavLink to="https://docs.google.com/forms/d/e/1FAIpQLSd9uSx0OyCHeHg7vS3PKXdHooWgYKdaSs3IA9H_l8nltQHyYQ/viewform" className="btn">
                Source
            </NavLink>
        </div>
    </div>

    
</div>


  )
}

export default WorkCard