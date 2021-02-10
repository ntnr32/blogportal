import * as React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'


const Image = ({ fluid }) => {
    const imageData = useStaticQuery(graphql`
        query {
            imageSharp(fluid: {originalName: {eq: "avatar.jpg"}}) {
                id
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    `);

    return (
        <Img fluid={fluid ? fluid : imageData.imageSharp.fluid} />
    )
}

export default Image;

Image.propTypes = {
    fluid: PropTypes.any
}