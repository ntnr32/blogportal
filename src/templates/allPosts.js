import React from 'react';
import { graphql } from "gatsby";

import Layout from "../components/layouts/Layout"
import SEO from "../components/seo"
import Post from "../components/Post"

const allPost = ({ pageContext, data }) => {
    // const { currentPage, numPages } = pageContext;
    // const isFirst = currentPage === 1;
    // const isLast = currentPage === numPages;
    // const prevPage = currentPage - 1 === 1 ? `/` : `/${currentPage - 1}`;
    // const nextPage = `${currentPage + 1}`;

    const posts = data.allMdx.edges;

    return (
        <Layout>
            <SEO title="Home" />
            {posts.map(post =>
                <Post key={post.node.frontmatter.slug}
                    title={post.node.frontmatter.title}
                    date={post.node.frontmatter.date}
                    excerpt={post.node.frontmatter.excerpt}
                    slug={post.node.frontmatter.slug}
                />)}
        </Layout>
    )
}

export default allPost;

export const query = graphql`
    query AllPostQuery($skip: Int!, $limit: Int!) {
        allMdx(skip: $skip, limit: $limit, sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        excerpt
                        slug
                        title
                    }
                }
            }
        }
    }
`;