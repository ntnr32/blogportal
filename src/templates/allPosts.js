import React from 'react';
import { graphql, Link } from "gatsby";

import Layout from "../components/layouts/Layout"
import SEO from "../components/seo"
import Pagination from '../components/Pagination';
import FlexContainer from '../components/container/FlexContainer';
import PostContainer from '../components/container/PostContainer';

const allPost = ({ pageContext, data }) => {
    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? `/` : `/${currentPage - 1}`;
    const nextPage = `${currentPage + 1}`;

    const posts = data.allMdx.edges;

    return (
        <Layout>
            <SEO title="Home" />
            <FlexContainer direction="flex-col">
                <PostContainer posts={posts} />
                <Pagination isFirst={isFirst} isLast={isLast} nextPage={nextPage} prevPage={prevPage} />
            </FlexContainer>
        </Layout >
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