import React from "react"
import style from "./login.module.css"
import Layout from "../components/layout"
import { Link } from "gatsby"
import validate from "../validations/validate"
import useForm from "../hooks/useForm"
const Login = () => {
  const { values, errors, handleChange, handleSubmit, onBlur } = useForm(
    login,
    validate
  )

  function login() {
    console.log("No errors, submit callback called!")
  }

  return (
    <Layout login={true}>
      <form onSubmit={handleSubmit}>
        <div className={style.loginContainer}>
          <h4>Already an eComKeeda Member?</h4>
          <h6 className={style.loginSubheading}>
            Login to access highly curated content that we make especially for
            the sincere readers like yours. If not a member yet,{" "}
            <Link style={{ fontWeight: 500 }} to="/">
              register now.
            </Link>
          </h6>
          <div className={style.loginInnerContainer}>
            <div className={style.inputContainer}>
              <label htmlFor="email">Username or Email Address</label>
              <input
                value={values.email}
                name="email"
                type="text"
                onChange={handleChange}
              />
              {errors.email && <p className={style.errorSec}>{errors.email}</p>}
            </div>
            <div className={style.inputContainer}>
              <label htmlFor="password">Password</label>
              <input
                value={values.password}
                name="password"
                type="password"
                onChange={handleChange}
              />
              {errors.password && (
                <p className={style.errorSec}>{errors.password}</p>
              )}
            </div>
            <input type="submit" value="Login" placeholder="Login" />
          </div>
        </div>
      </form>
    </Layout>
  )
}
export default Login
