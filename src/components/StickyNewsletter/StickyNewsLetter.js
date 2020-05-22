import React from "react"
import style from "./newsletter.module.css"
export default function StickyNewsLetter() {
  return (
    <div className={style.container}>
      <div className={style.form}>
        <label for="email">Email</label>
        <input id="email" className="tnp-email" type="email" name="ne" required="" />
      </div>
      <div className={style.submitBtn}>
        <input className="tnp-submit" type="submit" value="Subscribe" />
      </div>
      <div className={style.sidebarContact}>
        <h5>Do you have a question or looking for additional help?</h5>
        <a href="https://www.ecomkeeda.com/contact-us/">Contact us now</a>
        <small className={style.colowhite}>
          We respond within 48 business hours
        </small>
      </div>
    </div>
  )
}
//commit changes
//dsdsd
