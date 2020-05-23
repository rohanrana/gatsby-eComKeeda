import React, { Fragment } from "react"
import { Link } from "gatsby"
import style from "./Gridpost.module.css"
import OptimizedImage from "../image"

export default function Gridpost(props) {
  return (
    <Fragment>
      <Link to={`/${props.slug}/`}>
        <div style={{ height: props.height }} className={style.parent}>
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
                  <OptimizedImage src={require("../../images/share.png")} />0{" "}
                  <span className="mt-data-text">shares</span>
                </span>
                <span className={style.posterViews}>
                  <OptimizedImage src={require("../../images/power.png")} />
                  187 <span className="mt-data-text">views</span>
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </Fragment>
  )
}
