import React from "react"
import style from "./register.module.css"
import Layout from "../components/layout"
import { Row, Col } from "react-bootstrap"
import RegisterValidation from "../validations/RegisterValidation"
import useForm from "../hooks/useForm"
const Register = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    register,
    RegisterValidation
  )

  function register() {
    console.log("No errors, submit callback called!")
    // alert(JSON.stringify(values))
  }
  return (
    <Layout register={true}>
      <form onSubmit={handleSubmit}>
        <div className={style.loginContainer}>
          <h4>Become a Knowledge Keeda on eComKeeda</h4>
          <h6 className={style.loginSubheading}>
            We are glad you chose to register. Only registered Keeda’s get full
            access to all articles.
          </h6>
          <h6 className={style.loginSubheading}>
            We will send you your login details on mentioned email id. So2
            mention the correct one 🙂
          </h6>
          <div className={style.loginInnerContainer}>
            <Row>
              <Col>
                <div className={style.inputContainer}>
                  <label htmlFor="user_name">
                    Username<sup>*</sup>
                  </label>
                  <input
                    name="user_name"
                    value={values.user_name}
                    type="text"
                    onChange={handleChange}
                  />
                  {errors.user_name && (
                    <p className={style.errorSec}>{errors.user_name}</p>
                  )}
                </div>
              </Col>
              <Col>
                <div className={style.inputContainer}>
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={handleChange}
                    name="email"
                    value={values.email}
                    type="text"
                  />
                  {errors.email && (
                    <p className={style.errorSec}>{errors.email}</p>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={style.inputContainer}>
                  <label htmlFor="first_name">First Name</label>
                  <input
                    name="first_name"
                    onChange={handleChange}
                    value={values.first_name}
                    type="text"
                  />
                  {errors.first_name && (
                    <p className={style.errorSec}>{errors.first_name}</p>
                  )}
                </div>
              </Col>
              <Col>
                <div className={style.inputContainer}>
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    name="last_name"
                    value={values.last_name}
                    type="text"
                  />
                  {errors.last_name && (
                    <p className={style.errorSec}>{errors.last_name}</p>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={style.inputContainer}>
                  <label htmlFor="password">
                    Password<sup>*</sup>{" "}
                  </label>
                  <input
                    onChange={handleChange}
                    name="password"
                    value={values.password}
                    type="password"
                  />
                  {errors.password && (
                    <p className={style.errorSec}>{errors.password}</p>
                  )}
                </div>
              </Col>
              <Col>
                <div className={style.inputContainer}>
                  <label htmlFor="repeate_password">
                    Repeat Password<sup>*</sup>
                  </label>
                  <input
                    name="repeate_password"
                    value={values.repeate_password}
                    onChange={handleChange}
                    type="password"
                  />
                  {errors.repeate_password && (
                    <p className={style.errorSec}>{errors.repeate_password}</p>
                  )}
                </div>
              </Col>
            </Row>

            <input type="submit" value="Register" />
          </div>
        </div>
      </form>
    </Layout>
  )
}

export default Register
