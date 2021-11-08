import * as React from "react"
import Layout from "../components/Layout"
import HomeCanvas from "../components/homePage/HomeCanvas"
import HomeContent from "../components/homePage/HomeContent"
import Navigation from "../components/Navigation"

const IndexPage = props => {
  return (
    <Layout>
      <HomeCanvas />
      <Navigation />
      <HomeContent />
    </Layout>
  )
}

export default IndexPage
