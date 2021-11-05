import * as React from "react"
import Layout from "../components/Layout"
import HomeCanvas from "../components/homePage/HomeCanvas"
import Navigation from "../components/Navigation"

const IndexPage = props => {
  return <Layout>
    <HomeCanvas/>
    <Navigation/>
  </Layout>
}

export default IndexPage