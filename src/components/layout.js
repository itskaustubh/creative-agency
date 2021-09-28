import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// styled components
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {normalize} from 'styled-normalize'

// Components
import Header from './Header'

const darkTheme = {
  background : '#000000',
  color : '#ffffff',
  red : '#ea291e'
}
const lightTheme = {
  background : '#ffffff',
  color : '#000000',
  red : '#ea291e'
}

const GlobalStyle = createGlobalStyle`
  ${normalize}
  *{
    text-decoration : none;
    /* cursor: none: */
  }
  htmL{
    box-sizing : border-box;
    -webkit-font-smoothing : antialiased;
    font-size : 16px;
  }
  body{
    font-family: 'Open Sans','Helvetica Neue', sans-serif;
    background : ${props => props.theme.background};
    color: ${props => props.theme.color};
    overscroll-behavior: none;
    overflow-x : hidden;
  }
`

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

  return( 
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle/>
      <Header/>
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout