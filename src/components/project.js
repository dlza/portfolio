import React from "react"
import { Link } from "gatsby"

import HHOImage from '../images/hho.svg'

const Project = () => {
    return <div class="project">
        
        <Link to="/hho/">
            <div class="image" >
                <div class="project-image">
                    <img src={HHOImage} alt="" />
                </div>
            </div>
        </Link>
        <div class="project-heading">
            <Link to="/hho/" class="title">HHO Website</Link>
            <span class="date">Q4 2019</span>
        </div>
    </div>
}

export default Project