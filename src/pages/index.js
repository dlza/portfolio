import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const IndexPage = () => (
    <Layout>

      <div class="grid">
        <div class="grid-item info"> 
          <div className="grid-heading">
            <h1>David Lanham</h1>
          </div>
          <p>I’m a designer with a broad skillset spanning many different diciplines. I enjoy being deeply involved in the frontend process wherever possible and work closely with developers.
          <br/><br/>
          I know HTML5, CSS3, SASS. I have experience working with MVC websites.Umbraco. Proficient with various source control tools such as git and Azure devops. I design with development and developers in mind. Reusability, modularity, consistency. 
          <br/><br/>
          Currently interested in gatsbyJS and React.</p>
          <Link to="/about/">Go to page 2</Link>
          <a href="#">Linked in</a>
          <a href="#">Email</a>
        </div>
        <div class="grid-item projects">
          <div className="grid-heading">
            <h2>Recent Work</h2>
          </div>
          <div class="projects-grid">
            <Project />
            <Project />
            <Project />
            <Project />
          </div>               
        </div>
      </div>
    <SEO title="Home" />

  </Layout>
)

export default IndexPage
