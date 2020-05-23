import React from "react"
// import Img from "react-cool-img"
import { LazyLoadImage } from "react-lazy-load-image-component"
// import "react-lazy-load-image-component/src/effects/black-and-white.css"
// Suggest to use low quality or vector images
// import loadingImage from "../images/placeholder.png"
// import errorImage from "../images/placeholder.png"

const OptimizedImage = ({ src, style }) => (
  <img
    alt={"NO IMAGE"}
    style={style}
    src={src} // use normal <img> attributes as props
  />
)

export default OptimizedImage
