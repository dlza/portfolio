import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import "../components/grid.scss"

import ImageHHO from "../images/hho.svg"
import ImageSHA from "../images/sha.svg"
import ImageOMMM from "../images/ommm.svg"
import ImageFireworkx from "../images/fireworkx.svg"

const IndexPage = () => (
    <Layout>

      <div class="grid">
        <div class="grid-item info"> 
          <div className="grid-heading">
            <h1>David Lanham</h1>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          <br/><br/>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <Link to="/about/">Go to page 2</Link>
          <a href="#">Linked in</a>
          <a href="#">Email</a>
        </div>
        <div class="grid-item projects">
          <div className="grid-heading">
            <p>Recent Work</p>
          </div>
          <div class="projects-grid">
            <Project 
              ProjectID={"hho"}
              ProjectImage={ImageHHO}
              ProjectTitle={"HHO Website"}
              ProjectDate={"Q4 2019"}
              ProjectAltText={"HHO Website"}
              ProjectLink={"/hho/"}
            />
            <Project 
              ProjectID={"sha"}
              ProjectImage={ImageSHA}
              ProjectTitle={"SHA Website"}
              ProjectDate={"Q4 2019"}
              ProjectAltText={"SHA Website"}
              ProjectLink={"/sha/"}
            />
            <Project 
              ProjectID={"fireworkx"}
              ProjectImage={ImageFireworkx}
              ProjectTitle={"Fireworkx Website"}
              ProjectDate={"Q4 2019"}
              ProjectAltText={"Fireworkx Website"}
              ProjectLink={"/fireworkx/"}
            />
            <Project 
              ProjectID={"ommm"}
              ProjectImage={ImageOMMM}
              ProjectTitle={"Old Mutual Multimanagers Website"}
              ProjectDate={"Q4 2018"}
              ProjectAltText={"Old Mutual Multimanagers Website"}
              ProjectLink={"/ommm/"}
            />
          </div>               
        </div>
      </div>
    <SEO title="Home" />

  </Layout>
)

export default IndexPage
