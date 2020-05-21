import React from "react"
import FooterStyles from "./footer.module.css"
export default function Footer() {
  return (
    <footer className={FooterStyles.footer}>
      <div className="container">
        <span className="text-muted"> &copy; EcomKeeda 2019</span>
      </div>
    </footer>
  )
}
