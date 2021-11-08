import React, { useState, useEffect } from "react"
import { Nav, NavLeft, NavVideo, VideoTitle } from "../styles/navStyles"
import { useGlobalStateContext } from "../context/globalContext"
import { motion, AnimatePresence } from "framer-motion"
import { videoList } from "../content/videoList"

const Navigation = () => {
  const { isHomePage } = useGlobalStateContext()
  const [navVideo, setNavVideo] = useState("")

  console.log(videoList)

  useEffect(() => {
    return () => {
      setNavVideo("")
    }
  }, [])

  return (
    <AnimatePresence>
      {!isHomePage && (
        <Nav
          id="nav"
          initial={{ x: "-100%" }}
          exit={{ x: "-100%" }}
          animate={{ x: isHomePage ? "-100%" : "0" }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          <NavLeft>
            <div className="nav-titles">
              <ul>
                {videoList.map(video => (
                  <VideoTitle
                    key={video.id}
                    onHoverStart={() => setNavVideo(video.fname)}
                    initial={{ left: "-50px" }}
                    whileHover={{ left: "0" }}
                    animate={{
                      left: navVideo === video.fname ? "-15px" : "-50px",
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 101 57"
                    >
                      <path
                        d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    {video.title}
                  </VideoTitle>
                ))}
              </ul>
            </div>
          </NavLeft>
          <NavVideo>
            <AnimatePresence initial={false} exitBeforeEnter>
              <motion.video
                key={navVideo}
                style={{ width: !!navVideo ? "100%" : 0 }}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ width: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                src={
                  !!navVideo
                    ? require(`../assets/video/${navVideo}`).default
                    : null
                }
                autoPlay
                loop
                muted
              ></motion.video>
            </AnimatePresence>
          </NavVideo>
        </Nav>
      )}
    </AnimatePresence>
  )
}

export default Navigation
