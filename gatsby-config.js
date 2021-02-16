module.exports = {
  pathPrefix: "/personal-blog",
  siteMetadata: {
    title: `Blog`,
    description: `Blog Portal for learning and sharing.`,
    url: "",
    image: "",
    author: `@ntnr32`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { tailwind: true }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/static/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/static/svgs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            }
          }
        ]
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `blog-portal`,
        short_name: `blogportal`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/static/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-remark-classes`,
      options: {
        classMap: {
          "heading[depth=1]": "title",
          "heading[depth=2]": "subtitle",
          paragraph: "para",
        }
      }
    },
    `gatsby-plugin-no-sourcemaps`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
