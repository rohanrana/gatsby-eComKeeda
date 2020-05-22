import React, { Fragment } from "react"
import { navigate } from "gatsby"
import style from "./Gridpost.module.css"
import Image from "../image"

export default function Gridpost(props) {
  return (
    <Fragment>
      <div
        onClick={() => navigate(props.slug)}
        style={{ height: props.height }}
        className={style.parent}
        onclick=""
      >
        <div
          style={{ backgroundImage: `url(${props.image})` }}
          className={style.child}
        ></div>
        <div className={style.layouts}>
          {/* <Image /> */}

          <div className={style.posterCat}>
            <span className={style.themeBackground}>{props.category}</span>
          </div>
          {<h2 style={{ fontSize: props.titleSize }}>{props.title}</h2>}
          {!props.notitle && (
            <div className={style.postInfo}>
              <span className={style.posterShares}>
                <img
                  className="lazyload"
                  src={require("../../images/share.png")}
                  alt="shate imgP
                  
            "
                />
                0 <span className="mt-data-text">shares</span>
              </span>
              <span className={style.posterViews}>
                <img
                  className="lazyload"
                  src={require("../../images/power.png")}
                  alt="shate imgP
            "
                />
                187 <span className="mt-data-text">views</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  )
}
