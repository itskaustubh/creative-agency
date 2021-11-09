import * as React from "react"
import Layout from "../components/Layout"
import HomeCanvas from "../components/homePage/HomeCanvas"
import HomeContent from "../components/homePage/HomeContent"
import Projects from "../components/Projects"
import About from "../components/homePage/About"

const IndexPage = props => {
  return (
    <Layout>
      <HomeCanvas />
      <HomeContent />
      <Projects />
      <About />
    </Layout>
  )
}

export default IndexPage
