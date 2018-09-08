import React from 'react'
import './tap.css'

function Tap(props) {
  return (
    <div className="MainContainer noselect">
      <p>{props.bpm} BPM</p>
      <div
        onTouchStart={props.handleTap}
        onClick={props.handleClick}
        className="TapBox">
        <h1>Tap</h1>
      </div>
    </div>
  )
}

export default Tap