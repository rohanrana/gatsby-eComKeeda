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
    console.log("INNNR BLOGS",)

    let postArray= this.props.postArray.filter(d=>d.categories &&d.categories[0].name===this.props.category).slice(0,10)
    return (
      <div>
        <Slider {...settings}>
          {postArray.map((d)=>{
         
          return  <SlickCard  image={
            d.featured_media
              ? d.featured_media.source_url
              : "http://via.placeholder.com/1024"
          }  {...d}/>
          })}
         
        </Slider>
      </div>
    )
  }
}
export default InnerBloglistComponent
