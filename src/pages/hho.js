import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import hhoImage01 from '../images/hho-01.jpg'

const HHO = () => (
  <Layout>
    <SEO title="HHO" />
    <Link to="/" class="back-button"><FontAwesomeIcon icon={faArrowLeft} />Back</Link>
    <div class="case-study-heading">
      <h1>HHO Website</h1>
      <h3>Q4 2019</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div class="case-study-content">
      <img src={hhoImage01} />
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    
  </Layout>
)


export default HHO
