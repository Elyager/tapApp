import React, { Component } from "react"
import Tap from "../components/tap"

class HandleTap extends Component {
  state = {
    lastDateInMilis: 0,
    milis: 0,
    bpm: 0,
  }

  handleTap() {
    this.setState((prevState) => {
        let currentDateInMilis = new Date().getTime()

        if (prevState.lastDateInMilis !== 0) {
          let milis = currentDateInMilis - prevState.lastDateInMilis
          let bpm = Math.round(60000/milis)
          return {
              milis: milis,
              lastDateInMilis: currentDateInMilis,
              bpm: bpm
            }
        }

        return {
          lastDateInMilis: currentDateInMilis
        }
    });
  }

  handleClick() {
    console.log('Clicking')
  }

  render() {
      return <Tap
        handleTap={this.handleTap.bind(this)}
        handleClick={this.handleClick.bind(this)}
        bpm={this.state.bpm} />
  }
}

export default HandleTap

