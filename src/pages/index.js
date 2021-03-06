import React, { Fragment } from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import Gridpost from "../components/GridPost/Gridpost"
import { Row, Col } from "react-bootstrap"
import style from "./home.module.css"
import HorizontalCard from "../components/HorizontalCard/HorizontalCard"
import StickyNewsLetter from "../components/StickyNewsletter/StickyNewsLetter"
import InfiniteScroll from "react-infinite-scroll-component"
import PostList from "../components/PostList/PostLIst"
// ..
class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postArray: this.props.data.allWordpressPost.nodes,
      filterdPost: this.props.data.filterdPost.nodes,
      coronaPosts: this.props.data.coronaPosts.nodes,
      currentPage: 1,
      ItemsPerPage: 250,
      pageNumbers: null,
      currentItems: [],
    }
    this.handleClickPagination = this.handleClickPagination.bind(this)
  }
  componentDidMount() {
    const { postArray, ItemsPerPage } = this.state
    const currentItems = postArray.slice(0, ItemsPerPage)
    this.setState({ currentItems })
  }

  handleClickPagination(event) {
    this.setState(
      {
        ItemsPerPage: this.state.ItemsPerPage + 100,
      },
      () => {
        const { postArray } = this.state
        const currentItems = postArray.slice(0, this.state.ItemsPerPage)
        this.setState({
          currentItems: currentItems,
        })
      }
    )
    // document.body.scrollTop = document.documentElement.scrollTop = 0
  }
  render() {
    const { postArray, currentItems } = this.state
    console.log("WORDPOST", this.props.data)
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
            content="gatsby,gatsbyjs
             project,gatsby bootstrap"
          />
          <meta name="robot" content="index,follow" />
        </Helmet>
        <Row>
          {postArray.slice(0, 2).map(d => {
            return (
              <Col key={d.id} style={{ marginRight: "-17px" }}>
                <Gridpost
                  {...d}
                  category={d.categories ? d.categories[0].name : null}
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
                  loader={<h4 style={{ position: "absolute" }}>Loading...</h4>}
                  endMessage={
                    <p style={{ textAlign: "center" }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                >
                  {currentItems.map(post => {
                    if (post.categories && post.categories.length > 0) {
                      return (
                        <Fragment>
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
                        </Fragment>
                      )
                    }
                  })}
                </InfiniteScroll>
              </div>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <StickyNewsLetter />
            <hr />
            <PostList heading="Trending" posts={this.state.coronaPosts} />
            <hr />

            <PostList heading="Recently Added" posts={this.state.filterdPost} />
          </Col>
          <Col></Col>
        </Row>
      </Layout>
    )
  }
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
    filterdPost: allWordpressPost(
      limit: 10
      filter: { date: { gte: "2020-05-28T22:11:45.000Z" } }
    ) {
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
    coronaPosts: allWordpressPost(
      limit: 10
      filter: { categories: { elemMatch: { slug: { eq: "corona" } } } }
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
