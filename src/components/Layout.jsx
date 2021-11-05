import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CustomCursor from "./CustomCursor"
import {GlobalStyle} from '../styles/globalStyles'

// styled components
import {ThemeProvider} from 'styled-components'

// Components
import Header from './Header'

// context  
import {useGlobalStateContext} from '../context/globalContext'

const darkTheme = {
  background : '#000',
  color : '#ffffff',
  red : '#ea291e'
}
const lightTheme = {
  background : '#fff',
  color : '#000',
  red : '#ea291e'
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
  const {currentTheme} = useGlobalStateContext()
  console.log(currentTheme)

  return( 
      <ThemeProvider theme={currentTheme === "dark"? darkTheme: lightTheme}>
        <GlobalStyle/>
        <CustomCursor/>
        <Header/>
        <main>{children}</main>
      </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout