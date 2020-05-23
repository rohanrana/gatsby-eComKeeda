import React, { Fragment } from "react"
import Layout from "../layout"
import { Helmet } from "react-helmet"
import Gridpost from "../../components/GridPost/Gridpost"
import { Row, Col } from "react-bootstrap"
import style from "./categorypost.module.css"
import HorizontalCard from "../../components/HorizontalCard/HorizontalCard"
import StickyNewsLetter from "../../components/StickyNewsletter/StickyNewsLetter"
import InfiniteScroll from "react-infinite-scroll-component"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postArray: this.props.data.allWordpressPost.nodes,
      currentPage: 1,
      ItemsPerPage: 100,
      pageNumbers: null,
      currentItems: [],
    }
    this.handleClickPagination = this.handleClickPagination.bind(this)
  }
  componentDidMount() {
    // let numberOfPages = calcpagenumbers(
    //   this.state.postArray,
    //   this.state.ItemsPerPage
    // )
    // numberOfPages !== null &&
    //   this.setState({
    //     pageNumbers: numberOfPages,
    //   })
    const { postArray, currentPage, ItemsPerPage } = this.state

    const indexOfLastItem = currentPage * ItemsPerPage
    const indexOfFirstItem = 0
    const currentItems = postArray.slice(indexOfFirstItem, indexOfLastItem)

    this.setState({ currentItems })
  }

  handleClickPagination(event) {
    this.setState(
      {
        currentPage: this.state.currentPage + 1,
      },
      () => {
        const { postArray, currentPage, ItemsPerPage } = this.state
        const indexOfLastItem = currentPage * ItemsPerPage
        const indexOfFirstItem = 0
        const currentItems = postArray.slice(indexOfFirstItem, indexOfLastItem)

        this.setState(
          {
            currentItems: [...this.state.currentItems, ...currentItems],
          },
          () => {
            console.log("Cureent Items", currentItems)
          }
        )
      }
    )
  }
  render() {
    const { postArray, currentItems } = this.state

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

        {postArray.length === 0 ? (
          <Fragment>
            <Row>
              <Col xs={12} md={8}>
                <h1>No post found for this category.</h1>
              </Col>
              <Col xs={6} md={4}>
                <StickyNewsLetter />
              </Col>
            </Row>
          </Fragment>
        ) : (
          <Fragment>
            <Row>
              {postArray.slice(0, 2).map(d => {
                return (
                  <Col key={d.id} style={{ marginRight: "-17px" }}>
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
                    <InfiniteScroll
                      dataLength={currentItems.length} //This is important field to render the next data
                      next={this.handleClickPagination}
                      hasMore={currentItems.length !== postArray.length}
                      loader={
                        <h4 style={{ position: "absolute" }}>Loading...</h4>
                      }
                      endMessage={
                        <p style={{ textAlign: "center" }}>
                          <b>Yay! You have seen it all</b>
                        </p>
                      }
                      // below props only if you need pull down functionality
                    >
                      {currentItems.map(post => {
                        return (
                          <HorizontalCard
                            key={post.id}
                            {...post}
                            category={
                              post.categories ? post.categories[0].name : ""
                            }
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
                    </InfiniteScroll>
                  </div>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <StickyNewsLetter />
              </Col>
            </Row>
          </Fragment>
        )}
      </Layout>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      nodes {
        slug
        title
        featured_media {
          source_url
        }
        author {
          name
        }
        categories {
          name
        }
        excerpt
      }
    }
  }
`
export default IndexPage
