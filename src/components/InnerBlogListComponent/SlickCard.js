import React from "react"
import style from "./InnerBloglistComponent.module.css"
import OptimizedImage from "../image"

export default function SlickCard() {
  return (
    <div className={style.cardWrapper}>
      <OptimizedImage
        style={{
          width: "97%",
          height: 120,
        }}
      />
    </div>
  )
}
