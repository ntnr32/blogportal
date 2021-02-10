import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layouts/Layout"
import SEO from "../components/seo"


const AboutPage = ({ data }) => (
    <Layout>
        <SEO title="About" />
        {data.site.siteMetadata.title}
    </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }`