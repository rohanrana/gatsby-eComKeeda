import React from "react"
import style from "./newsletter.module.css"
export default function StickyNewsLetter() {
  return (
    <div class={style.container}>
      <div class={style.form}>
        <label>Email</label>
        <input class="tnp-email" type="email" name="ne" required="" />
      </div>
      <div class={style.submitBtn}>
        <input class="tnp-submit" type="submit" value="Subscribe" />
      </div>
      <div class={style.sidebarContact}>
        <h5>Do you have a question or looking for additional help?</h5>
        <a href="https://www.ecomkeeda.com/contact-us/">Contact us now</a>
        <small class={style.colowhite}>
          We respond within 48 business hours
        </small>
      </div>
    </div>
  )
}
//commit changes
//dsdsd
