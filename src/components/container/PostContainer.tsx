import React from 'react'
import Post from '../Post'

const PostContainer = ({ posts }) => {
    return (
        <div>
            {posts.map(({ node }) =>
                <Post key={node.frontmatter.slug}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    excerpt={node.frontmatter.excerpt}
                    slug={node.frontmatter.slug}
                />
            )}
        </div>
    )
}

export default PostContainer