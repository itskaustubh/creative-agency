import React, { useRef, useState, useEffect } from "react"
import {
  Project,
  ProjectLeft,
  ProjectVideo,
  VideoTitle,
} from "../styles/projectStyles"
import { StyledLink } from "../styles/globalStyles"
import { motion } from "framer-motion"
import { videoList } from "../content/videoList"

import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

const Projects = () => {
  const [pVideo, setPVideo] = useState(videoList[0].fname)
  const videoRef = useRef(null)

  const handleVideoHover = (e, video) => {
    setPVideo(video.fname)
    console.log("hovering ", pVideo)
  }

  const transitionVideo = () => {
    const pref = videoRef.current
    const bounds = pref.getBoundingClientRect()

    return { left: "0%", top: -bounds.top, opacity: 0, width: "100%" }
  }

  const animation = useAnimation()
  const [ulRef, isInView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  })

  useEffect(() => {
    if (isInView) {
      console.log("in view!")
      animation.start("animate")
    }
  }, [isInView])

  const vidTitleParent = {
    initial: {
      opacity: 0,
      left: -150,
    },
    animate: {
      opacity: 1,
      left: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  }

  const vidTitleChild = {
    initial: { opacity: 0, left: -150 },
    animate: {
      opacity: 1,
      left: 0,
      transition: { duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] },
    },
  }

  return (
    <Project id="project">
      <ProjectLeft
        transition={{
          duration: 1.2,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        <div className="pro-titles">
          <motion.ul
            ref={ulRef}
            animate={animation}
            variants={vidTitleParent}
            initial="initial"
            exit="exit"
          >
            {videoList.map(video => (
              <motion.span variants={vidTitleChild} key={video.path}>
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
                  <StyledLink to={`/project/${video.path}`} key={video.fname}>
                    <motion.span
                      id="space"
                      exit={{ width: pVideo === video.fname ? "150px" : 0 }}
                      transition={{
                        duration: 1.2,
                        ease: [0.6, 0.05, -0.01, 0.9],
                      }}
                    ></motion.span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 101 57"
                    >
                      <path
                        d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    <span id="video-title">{video.title}</span>
                  </StyledLink>
                </VideoTitle>
              </motion.span>
            ))}
          </motion.ul>
        </div>
      </ProjectLeft>
      <ProjectVideo
        exit={() => transitionVideo()}
        transition={{
          duration: 1.2,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
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
      </ProjectVideo>
    </Project>
  )
}

export default Projects
