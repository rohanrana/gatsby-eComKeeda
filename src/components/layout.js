/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/Header/Header"
import "./layout.css"
import Footer from "./Footer/Footer"
import SEO from "./SEO"
import { Container } from "react-bootstrap"
import "lazysizes/plugins/parent-fit/ls.parent-fit"
const Layout = ({ children, login }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO />
      <Header login={login} siteTitle={data.site.siteMetadata.title} />
      {/* <div className="container">{children}</div> */}
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
