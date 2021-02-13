import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layouts/Layout';
import SEO from '../components/seo';


const singlePost = ({ data }) => {
    const { title, date, slug, excerpt, featureImage } = data.mdx.frontmatter;
    // const imageSharp = featureImage;
    // const image = imageSharp ? imageSharp.childImageSharp.fixed : null;
    return (
        <Layout>
            <SEO title={title} description={excerpt} />
            <div className="markdown">
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </div>
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