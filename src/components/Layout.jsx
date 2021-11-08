import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CustomCursor from "./CustomCursor"
import { GlobalStyle } from "../styles/globalStyles"

// styled components
import { ThemeProvider } from "styled-components"

// Components
import Header from "./Header"

// context
import { useGlobalStateContext } from "../context/globalContext"

// gatsby hates randomness
// https://spectrum.chat/gatsby-js/general/random-value-at-build-time~0dfc465a-c52a-45de-97e3-f9380a1c0cf6
// const pastelColors = [
//   'aquamarine', 'blueviolet', 'coral', 'cornflowerblue','lightcoral',
//   'lightpink','lightsalmon','lightseagreen','lightpink','lightseagreen',
//   'mediumslateblue','mediumturquoise','palevioletred','tomato'
// ]
// const randomPastelColor = pastelColors[Math.round(Math.random() * pastelColors.length)]

const universalTheme = {
  red: "crimson",
}

const darkTheme = {
  name: "dark",
  background: "#000",
  color: "#ffffff",

  ...universalTheme,
}
const lightTheme = {
  name: "light",
  background: "#fff",
  color: "#000",
  ...universalTheme,
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { currentTheme } = useGlobalStateContext()
  console.log(currentTheme)

  return (
    <ThemeProvider
      theme={{
        current: currentTheme === "dark" ? darkTheme : lightTheme,
        anti: currentTheme === "dark" ? lightTheme : darkTheme,
      }}
    >
      <GlobalStyle />
      <CustomCursor />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
