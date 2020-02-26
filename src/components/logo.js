import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cropped-John_Mueller_AlbumArt2720.jpg" }) {
        childImageSharp {
          fixed(width: 65) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img
      alt="The Expat Files Album Art"
      className="mx-auto"
      fixed={data.file.childImageSharp.fixed}
    />
  )
}

export default Logo
