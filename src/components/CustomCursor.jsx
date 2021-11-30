import React, { useRef, useEffect, useState } from "react"
import { Cursor } from "../styles/globalStyles"
import { useGlobalStateContext } from "../context/globalContext"

const CustomCursor = () => {
  const { cursorType: cType, isHomePage } = useGlobalStateContext()
  const [mouseCords, setMouseCords] = useState({
    top: "-100px",
    left: "-100px",
  })

  const cursorRef = useRef(null)

  const handleMouseMove = evt => {
    setMouseCords({
      left: evt.pageX + "px",
      top: evt.pageY + "px",
    })
  }

  const handleScroll = evt => {
    // TODO: https://stackoverflow.com/a/6728432
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    // document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      //   document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div>
      <Cursor
        ref={cursorRef}
        style={mouseCords}
        className={cType}
        isHomePage={isHomePage}
      />
    </div>
  )
}

export default CustomCursor
