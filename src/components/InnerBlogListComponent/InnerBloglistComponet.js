import React, { Component } from "react"
import Slider from "react-slick"
import SlickCard from "./SlickCard"
const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  swipeToSlide: true,
//   dots: true,
  afterChange: function (index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    )
  },
}

class InnerBloglistComponent extends Component {
  render() {
    return (
      <div>
        <Slider {...settings}>
          <SlickCard />
          <SlickCard />
          <SlickCard />
          <SlickCard />
          <SlickCard />
          <SlickCard />
          <SlickCard />
          <SlickCard />
          <SlickCard />
          <SlickCard />
          <SlickCard />
        </Slider>
      </div>
    )
  }
}
export default InnerBloglistComponent
