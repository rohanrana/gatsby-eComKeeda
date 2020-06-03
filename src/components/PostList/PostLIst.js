import React from "react"
import style from "./list.module.css"
import OptimizedImage from "../image"
export default function PostList({ posts, heading }) {
  return (
    <div className={style.container}>
      <h4> {heading}</h4>
      {posts.map(post => {
        return (
          <div className={style.sidebarContact}>
            <div>
              <OptimizedImage
                style={{ height: 70, width: 70 }}
                src={
                  post.featured_media
                    ? post.featured_media.source_url
                    : "http://via.placeholder.com/1024"
                }
              />
            </div>
            <div>
              <small
                style={{ textTransform: "uppercase" }}
                className={style.colowhitecate}
              >
                {post.categories ? post.categories[0].name : "Uncategorised"}
              </small>
              <small className={style.colowhite}>{post.title}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.slice(0, 100),
                }}
                className={style.description}
              ></p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
//commit changes
//dsdsd
