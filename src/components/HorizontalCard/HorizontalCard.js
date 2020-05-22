import React from "react"
import style from "./Horizontal.module.css"
import { navigate } from "gatsby"
export default function HorizontalCard(props) {
  return (
    <div
      onClick={() => navigate(props.slug)}
      style={{ cursor: "pointer" }}
      className={style.HCardContainer}
    >
      <div style={{ height: props.height }} className={style.parent} onclick="">
        <div
          style={{
            backgroundImage: `url(${props.image})`,
          }}
          className={style.child}
        ></div>
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
            <p dangerouslySetInnerHTML={{ __html: props.excerpt }}></p>
          </div>
        </div>
      </div>
    </div>
  )
}
