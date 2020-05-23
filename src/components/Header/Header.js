import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Logo from "../../images/logo-normal.png"
import style from "./Header.module.css"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
class Header extends React.Component {
  state = { isDown: false }
  componentDidMount() {
    // document.getElementById("header1-container").style.display = "none"
    // const scrollUp = "scrollUp"
    // const scrollDown = "scrollDown"
    // let lastScroll = 0
    // const body = document.body
    // window.addEventListener("scroll", () => {
    //   const currentScroll = window.pageYOffset
    //   if (currentScroll == 0) {
    //     body.classList.remove(scrollUp)
    //     return
    //   }
    //   if (currentScroll <= 128) {
    //     // alert("YYY")
    //     // body.classList.remove(scrollUp)
    //     document.getElementById("header1-container").style.display = "none"
    //   }
    //   if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    //     // down
    //     body.classList.remove(scrollUp)
    //     body.classList.add(scrollDown)
    //     document.getElementById("header1-container").style.display = "none"
    //   } else if (
    //     currentScroll < lastScroll &&
    //     body.classList.contains(scrollDown)
    //   ) {
    //     // up
    //     body.classList.remove(scrollDown)
    //     body.classList.add(scrollUp)
    //     document.getElementById("header1-container").style.display = "block"
    //   }
    //   if (lastScroll === currentScroll) {
    //   }
    //   lastScroll = currentScroll
    // })
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allWordpressCategory {
              nodes {
                id
                name
                slug
              }
            }
          }
        `}
        render={data => {
          let headerMenu = data.allWordpressCategory.nodes
          return (
            <React.Fragment>
              <Container className={["p-3"].join(" ")}>
                <Row>
                  <Col>
                    <Link to="/">
                      <img
                        className="lazyload"
                        src={Logo}
                        width={155}
                        alt="noImage"
                      />
                    </Link>
                  </Col>
                  <Col md={10}>
                    <div className={style.userLoginSec}>
                      <ul>
                        <li>
                          <a href="https://www.ecomkeeda.com/membership-login?postid=271">
                            Login
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ecomkeeda.com/membership-register?postid=271">
                            Register
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={style.topNav}>
                      <div className={style.pullRight}>
                        <ul className={style.sfMenu}>
                          {headerMenu.map(menu => {
                            const url = `/category/${menu.slug}/`

                            return (
                              <li key={menu.id}>
                                <Link to={url}>{menu.name}</Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              {/* <div id="header1-container" className="header-container">
                <Row>
                  <Col>
                    <img src={Logo} width={80} alt="noImage" />
                  </Col>
                  <Col md={10}>
                    <div
                      style={{ marginTop: "-8px", marginRight: "12%" }}
                      className={style.topNav}
                    >
                      <div className={style.pullRight}>
                        <ul className={style.sfMenu}>
                          {headerMenu.map(menu => {
                            return (
                              <li>
                                <Link to={`category/${menu.slug}`}>
                                  {menu.name}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div> */}
            </React.Fragment>
          )
        }}
      />
    )
  }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
