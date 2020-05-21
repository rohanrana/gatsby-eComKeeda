/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { graphql } from "gatsby"
import Header from "../Header/Header"
import SEO from "../SEO"
import innertext from "innertext"
import Footer from "../Footer/Footer"

const BlogPostLayout = ({ data }) => {
  const post = data.wordpressPost
  return (
    <>
      <SEO
        title={innertext(post.title)}
        description={innertext(post.excerpt)}
        image={
          post.featured_media
            ? post.featured_media.source_url
            : "http://via.placeholder.com/1024"
        }
        keywords={post.categories.map(res => res.name).join(", ")}
      />
      <Header />
      <div className="container">
        <div className="row justify-content-md-center">
          <h1 dangerouslySetInnerHTML={{ __html: post.title }}></h1>
          <div style={{ padding: "20px" }}>
            <img
              src={
                post.featured_media
                  ? post.featured_media.source_url
                  : "http://via.placeholder.com/1024"
              }
              alt={post.slug}
              style={{ width: "100%" }}
            />
            {/* <Gridpost /> */}
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlogPostLayout
export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      slug
      title
      content
      featured_media {
        source_url
      }
      categories {
        name
      }
      excerpt
    }
  }
`
