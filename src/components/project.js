import React from "react"
import { Link } from "gatsby"
import "../components/project.scss"

export default props => (
    <div class="project" id={props.ProjectID}>
        <Link to={props.ProjectLink}>
            <div class="image" >
                <div class="project-image">
                    <img src={props.ProjectImage} alt={props.ProjectAltText} />
                </div>
            </div>
        </Link>
        <div class="project-heading">
            <Link to={props.ProjectLink} class="title">{props.ProjectTitle}</Link>
            <span class="date">{props.ProjectDate}</span>
        </div>
    </div>
)