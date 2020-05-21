import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby";

const Title = ({ title }) => (

  
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `purpule`,
            textDecoration: `none`,
          }}
        >
          {title}
        </Link>
      </h1>
)
//dasdsdsd

Title.propTypes = {
  siteTitle: PropTypes.string,
}

Title.defaultProps = {
  siteTitle: ``,
}

export default Title