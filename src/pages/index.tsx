import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layouts/Layout"
import Post from "../components/Post"
import SEO from "../components/seo"

const posts = [1, 2, 3, 4]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {posts.map(x => <Post />)}
  </Layout>
)

export default IndexPage
