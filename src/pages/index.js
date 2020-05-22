import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import Gridpost from "../components/GridPost/Gridpost"
import { Row, Col } from "react-bootstrap"
import style from "./home.module.css"
import HorizontalCard from "../components/HorizontalCard/HorizontalCard"
import StickyNewsLetter from "../components/StickyNewsletter/StickyNewsLetter"
const IndexPage = ({ data }) => {
  let postArray = data.allWordpressPost.nodes
  return (
    <Layout>
      <Helmet>
        <title>eComKeeda</title>
        <meta
          name="description"
          content="This is the description of gtasby wordpress site"
        />
        <meta
          name="keywords"
          content="gatsby,gatsbyjs project,gatsby bootstrap"
        />
        <meta name="robot" content="index,follow" />
      </Helmet>
      <Row>
        {postArray.slice(0, 2).map(d => {
          return (
            <Col style={{ marginRight: "-17px" }}>
              <Gridpost
                {...d}
                category={d.categories[0].name}
                image={d.featured_media?d.featured_media.source_url :"http://via.placeholder.com/1024" }

                titleSize={"46px"}
              />
            </Col>
          )
        })}
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <div className={[style.contentLeft, "mt-3"].join(" ")}>
            <h2 className={style.heading}>Latest News </h2>
            <div className={style.listContainer}>
              {postArray.map(post => {
                return (
                  <HorizontalCard
                    {...post}
                    category={post.categories?post.categories[0].name:""}
                    image={post.featured_media?post.featured_media.source_url :"http://via.placeholder.com/1024" }
                    date={post.date}
                    author={post.author.name}
                  />
                )
              })}
            </div>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <StickyNewsLetter />
        </Col>
      </Row>
    </Layout>
  )
}

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        id
        title
        slug
        excerpt
        date(formatString: "MMM,DD,YYYY")
        author {
          name
        }
        featured_media {
          source_url
        }
        categories {
          name
        }
      }
    }
  }
`
export default IndexPage
