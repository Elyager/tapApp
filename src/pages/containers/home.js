import React, { Component } from "react"
import HomeLayout from '../components/home-layout'
import HandleError from "../../errors/containers/handle-error"
import HandleTap from "../../tap/containers/handle-tap";

class Home extends Component {
  // state = {

  // }
  render() {
    return (
      <HandleError>
        <HomeLayout>
          <HandleTap />
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home