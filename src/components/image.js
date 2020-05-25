import React from "react"
import Img from "react-cool-img"

// Suggest to use low quality or vector images
import loadingImage from "../images/placeholder.png"
import errorImage from "../images/placeholder.png"

const OptimizedImage = ({ src, style }) => (
  <Img
    placeholder={loadingImage}
    src={`https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&w=1000&q=80`}
    style={style}
    cache
    error={errorImage}
    className="lazyload"
    alt="React Cool Img"
  />
)

export default OptimizedImage
