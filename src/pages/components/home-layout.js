import React from "react"
import './home-layout.css'

function HomeLayout(props) {
  return (
    <section className="HomeLayout noselect">
      <header className="Header">
        <h1>Tap App</h1>
      </header>
      {props.children}
    </section>
  )
}

export default HomeLayout