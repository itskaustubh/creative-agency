import React from "react"
import { GlobalProvider } from "./src/context/globalContext"
import { AnimatePresence } from "framer-motion"

export const wrapRootElement = ({ element }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <GlobalProvider>{element}</GlobalProvider>
    </AnimatePresence>
  )
}

// https://janessagarrow.com/blog/gatsby-framer-motion-page-transitions/
export const wrapPageElement = ({ element }) => {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
}

export const shouldUpdateScroll = ({
  prevRouterProps,
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  // transition duration from `layout.js` * 1000 to get time in ms

  // * 2 for exit + enter animation
  const prevPathname =
    prevRouterProps !== undefined
      ? prevRouterProps.location.pathname
      : undefined

  const TRANSITION_DELAY = 1.2 * 1000 * 2

  console.log(location)
  console.log(prevPathname)

  // if it's a "normal" route

  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY)
  }

  // if we used the browser's forwards or back button
  else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0]

    const projectRegex = /\/project\/.*/

    switch (true) {
      case location.pathname === "/":
        window.setTimeout(() => window.scrollTo(...savedPosition), 10)
        break
      case projectRegex.test(location.pathname):
        console.log(typeof prevPathname)
        console.log(projectRegex)
        const prevPageisProjectPage = projectRegex.test(prevPathname)
        console.log(prevPathname, prevPageisProjectPage)
        if (prevPageisProjectPage) {
          console.log("previous page was a project page")
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        } else {
          window.setTimeout(
            () => window.scrollTo({ top: 0, left: 0 }),
            TRANSITION_DELAY / 2
          )
        }

        break
      default:
        window.setTimeout(
          () => window.scrollTo(...savedPosition),
          TRANSITION_DELAY
        )
        break
    }
  }

  return false
}
