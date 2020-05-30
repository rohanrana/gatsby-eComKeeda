import React, { Component } from "react"
import Slider from "react-slick"
import SlickCard from "./SlickCard"

const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  swipeToSlide: true,
  arrows: true,
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
  //   dots: true,
  afterChange: function (index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    )
  },
}

class InnerBloglistComponent extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  render() {
    let postArray = this.props.postArray
      .filter(d => d.categories && d.categories[0].name === this.props.category)
      .slice(0, 10)
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {postArray.map(d => {
            return <SlickCard {...d} />
          })}
        </Slider>
      </div>
    )
  }
}
export default InnerBloglistComponent
