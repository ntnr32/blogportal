import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layouts/Layout';
import SEO from '../components/seo';

const singlePost = ({ data }) => {
    const { title, date, slug, excerpt, featureImage } = data.mdx.frontmatter;
    const image = featureImage.childImageSharp.fixed;
    return (
        <Layout>
            <SEO title={title} description={excerpt} />
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Layout>
    )
}

export default singlePost;

export const pageQuery = graphql`
    query singlePostQuery($id: String!) {
        mdx(id: {eq: $id}) {
            body
            frontmatter {
                date
                excerpt
                slug
                title
                featureImage {
                    childImageSharp {
                        fixed {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
`