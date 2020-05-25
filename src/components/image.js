import React from "react"
import Img from "react-cool-img"

// Suggest to use low quality or vector images
import loadingImage from "../images/placeholder.png"
import errorImage from "../images/placeholder.png"

const OptimizedImage = ({ src, style }) => (
  <Img
    placeholder={loadingImage}
    // src={src}
    src={`http://34.67.49.241/wp-content/uploads/2020/05/a613a441-ebb9-316d-9580-74e06cfdb297.jpg`}
    style={style}
    cache
    error={errorImage}
    className="lazyload"
    alt="React Cool Img"
  />
)

export default OptimizedImage
