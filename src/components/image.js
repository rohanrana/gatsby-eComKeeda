import React from "react"
// import Img from "react-cool-img"

// // Suggest to use low quality or vector images
// import loadingImage from "../images/placeholder.png"
// import errorImage from "../images/placeholder.png"

const OptimizedImage = ({ src, style }) => (
  <img
    // placeholder={loadingImage}
    src={src}
    style={style}
    // cache

    // error={errorImage}
    alt="React Cool Img"
  />
)

export default OptimizedImage
