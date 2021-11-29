import React, { useRef, useState, useEffect } from "react"
import {
  Project,
  ProjectLeft,
  ProjectVideo,
  VideoTitle,
} from "../styles/projectStyles"
import { StyledLink } from "../styles/globalStyles"
import { motion, AnimatePresence } from "framer-motion"
import { videoList } from "../content/videoList"

const Projects = () => {
  const [pVideo, setPVideo] = useState(videoList[0].fname)
  const videoRef = useRef(null)

  useEffect(() => {
    console.log("component moounted")

    return () => {
      console.log("component umoounted")
    }
  }, [])

  const handleVideoHover = (e, video) => {
    setPVideo(video.fname)
    console.log("hovering ", pVideo)
  }

  const transitionVideo = () => {
    const vref = videoRef.current
    const bounds = vref.getBoundingClientRect()

    return { left: "0%", top: -bounds.top, opacity: 0, width: "100%" }
  }

  return (
    <Project id="project">
      <ProjectLeft
        exit={{}}
        transition={{
          duration: 1.2,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        <div className="pro-titles">
          <ul>
            {videoList.map(video => (
              <StyledLink
                to={`/project/${video.path}`}
                key={video.fname}
                state={video}
              >
                <VideoTitle
                  onHoverStart={e => handleVideoHover(e, video)}
                  initial={{ left: "-50px" }}
                  whileHover={{ left: "0" }}
                  animate={{
                    left: pVideo === video.fname ? "-15px" : "-50px",
                  }}
                  transition={{
                    duration: pVideo === video.fname ? 0.6 : 0.2,
                    ease: [0.6, 0.05, -0.01, 0.9],
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >
                  <motion.span
                    id="space"
                    exit={{ width: pVideo === video.fname ? "150px" : 0 }}
                    transition={{
                      duration: 1.2,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    }}
                  ></motion.span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
                    <path
                      d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <span>{video.title}</span>
                </VideoTitle>
              </StyledLink>
            ))}
          </ul>
        </div>
      </ProjectLeft>
      <ProjectVideo
        exit={() => transitionVideo()}
        transition={{
          duration: 1.2,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.video
            ref={videoRef}
            key={pVideo}
            style={{ width: !!pVideo ? "100%" : 0 }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            src={!!pVideo ? require(`../assets/video/${pVideo}`).default : null}
            autoPlay
            loop
            muted
          ></motion.video>
        </AnimatePresence>
      </ProjectVideo>
    </Project>
  )
}

export default Projects
