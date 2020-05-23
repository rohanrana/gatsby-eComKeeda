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
            // style={{ backgroundImage: `url(${props.image})` }}
            className={style.child}
          >
            <OptimizedImage
              src={props.image}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className={style.layouts}>
            <div className={style.posterCat}>
              <span className={style.themeBackground}>{props.category}</span>
            </div>
            {<h2 style={{ fontSize: props.titleSize }}>{props.title}</h2>}
            {!props.notitle && (
              <div className={style.postInfo}>
                <span className={style.posterShares}>
                  <img src={require("../../images/share.png")} alt="no-image" />
                  0 <span className="mt-data-text">shares</span>
                </span>
                <span className={style.posterViews}>
                  <img src={require("../../images/power.png")} alt="no-image" />
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
