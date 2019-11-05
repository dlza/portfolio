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
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          <br/><br/>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
