import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import Gridpost from "../components/GridPost/Gridpost"
import { Row, Col, Button } from "react-bootstrap"
import style from "./home.module.css"
import HorizontalCard from "../components/HorizontalCard/HorizontalCard"
import StickyNewsLetter from "../components/StickyNewsletter/StickyNewsLetter"
import { Link } from "gatsby"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postArray: this.props.data.allWordpressPost.nodes,
      currentPage: 1,
      ItemsPerPage: 100,
      pageNumbers: null,
    }
    this.handleClickPagination = this.handleClickPagination.bind(this)
  }
  componentDidMount() {
    let numberOfPages = calcpagenumbers(
      this.state.postArray,
      this.state.ItemsPerPage
    )
    numberOfPages !== null &&
      this.setState({
        pageNumbers: numberOfPages,
      })
  }

  handleClickPagination(event) {
    this.setState(
      {
        currentPage: this.state.currentPage + 1,
      },
      () => {
        // this.setState({})
      }
    )
    // document.body.scrollTop = document.documentElement.scrollTop = 0
  }
  render() {
    const { postArray, currentPage, ItemsPerPage, pageNumbers } = this.state

    const indexOfLastItem = currentPage * ItemsPerPage
    const indexOfFirstItem = 0
    const currentItems = postArray.slice(indexOfFirstItem, indexOfLastItem)

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
                  image={
                    d.featured_media
                      ? d.featured_media.source_url
                      : "http://via.placeholder.com/1024"
                  }
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
                {currentItems.map(post => {
                  return (
                    <HorizontalCard
                      {...post}
                      category={post.categories ? post.categories[0].name : ""}
                      image={
                        post.featured_media
                          ? post.featured_media.source_url
                          : "http://via.placeholder.com/1024"
                      }
                      date={post.date}
                      author={post.author.name}
                    />
                  )
                })}

                <Button
                  className={style.loadMoreBtn}
                  onClick={this.handleClickPagination}
                >
                  Load More Blogs
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={6} md={4}>
            {/* {this.state.pageNumbers !== null &&
              this.state.pageNumbers.map(number => {
                return (
                  <li
                    key={number}
                    id={number}
                    className={
                      number === this.state.currentPage ? "active" : ""
                    }
                    onClick={this.handleClickPagination}
                  >
                    {number}
                  </li>
                )
              })} */}
            <StickyNewsLetter />
          </Col>
        </Row>
      </Layout>
    )
  }
}
// const IndexPage = ({ data }) => {
//   let postArray = data.allWordpressPost.nodes
//   return (

//   )
// }

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

const calcpagenumbers = (items, itemsPerPage) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i)
  }
  return pageNumbers
}
export default IndexPage
