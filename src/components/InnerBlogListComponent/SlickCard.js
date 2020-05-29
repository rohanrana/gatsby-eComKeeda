import React, { Fragment } from "react"
import { Link } from "gatsby"
import style from "./InnerBloglistComponent.module.css"
import OptimizedImage from "../image"

export default function SlicCard(props) {
  return (
    <Fragment>
      <Link to={`/${props.slug}/`}>
        <div style={{ height: 120, width: "97%" }} className={style.parent}>
          <div className={style.child}>
            <OptimizedImage
              src={props.image}
              isSlick={true}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className={style.layouts}>
            <div className={style.posterCat}>
              <p className={style.themeBackground}>{props.title}</p>
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  )
}
