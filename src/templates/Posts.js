import React, { Component } from "react"
import Link from "gatsby-link"



const Posts = (props) => {
  //   const { group, index, first, last, pageCount } = pageContext
  //   const previousUrl = index - 1 == 1 ? "/" : (index - 1).toString()
  //   const nextUrl = (index + 1).toString()

  console.log("DATA", props)

  return (
    <div>
      <h4> Pages</h4>

      {/* {group.map(({ node }) => (
        <div key={node.id} className="blogListing">
          <div className="date">{node.frontmatter.date}</div>
          <Link className="blogUrl" to={node.fields.slug}>
            {node.frontmatter.title}
          </Link>
          <div>{node.excerpt}</div>
        </div>
      ))} */}
      {/* <div className="previousLink">
        <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={nextUrl} text="Go to Next Page" />
      </div> */}
    </div>
  )
}
export const pageQuery = graphql`
  query homePageQuery {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          id
          slug
        }
      }
    }
  }
`
export default Posts
