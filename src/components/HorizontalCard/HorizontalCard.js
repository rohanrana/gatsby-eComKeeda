import React from "react"
import style from "./Horizontal.module.css"
import { Link } from "gatsby"
import OptimizedImage from "../image"
// import OptimizedImage from "../image"
export default function HorizontalCard(props) {
  return (
    <Link to={`/${props.slug}/`}>
      <div style={{ cursor: "pointer" }} className={style.HCardContainer}>
        <div style={{ height: props.height }} className={style.parent}>
          <div
            // style={{
            //   backgroundImage: `url(${props.image})`,
            // }}
            className={style.child}
          >
            <OptimizedImage style={{ width: "100%" }} src={props.image} />
          </div>
          <div className={style.layouts}>
            <div className={style.posterCat}>
              <span className={style.themeBackground}>{props.category}</span>
            </div>
          </div>
        </div>
        <div className={style.InfoArea}>
          <div className={style.postInfo}>
            <span className={style.posterViews}>
              <img
                src={require("../../images/power-2.png")}
                alt="shate imgP
            "
                className="lazyload"
              />
              <span>187 views</span>
            </span>
          </div>
          <div className={style.postMetaData}>
            <h2> {props.title}</h2>
            <div className={style.userData}>
              <span className={style.userName}> {props.author} </span>
              <span className={style.postDate}> - </span>
              <span className={style.postDate}> {props.date} </span>
              <p
                dangerouslySetInnerHTML={{
                  __html: props.excerpt.slice(0, 200),
                }}
              ></p>
              
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
