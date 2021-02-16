exports.createPages = async function ({ actions, graphql }) {
    const { createPage } = actions;

    const { data } = await graphql(`
        query {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                    node {
                        id
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }  
    `);

    const posts = data.allMdx.edges;
    const postPerPage = 4;
    const numPages = Math.ceil(posts.length / postPerPage);

    // Create paginated pages for posts
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/` : `${i + 1}`,
            component: require.resolve("./src/templates/allPosts.js"),
            context: {
                limit: postPerPage,
                skip: i * postPerPage,
                numPages,
                currentPage: i + 1
            }
        })
    })

    // Create Single Blog Post

    posts.forEach(edge => {
        const slug = edge.node.frontmatter.slug;
        const id = edge.node.id;
        createPage({
            path: slug,
            component: require.resolve(`./src/templates/singlePost.js`),
            context: { id },
        })
    })
}