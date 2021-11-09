import React, { useState } from "react"
import {
  Project,
  ProjectLeft,
  ProjectVideo,
  VideoTitle,
} from "../styles/projectStyles"
import { motion, AnimatePresence } from "framer-motion"
import { videoList } from "../content/videoList"

const Projects = () => {
  const [pVideo, setPVideo] = useState(videoList[0].fname)

  return (
    <Project id="project">
      <ProjectLeft>
        <div className="pro-titles">
          <ul>
            {videoList.map(video => (
              <VideoTitle
                key={video.id}
                onHoverStart={() => setPVideo(video.fname)}
                initial={{ left: "-50px" }}
                whileHover={{ left: "0" }}
                animate={{
                  left: pVideo === video.fname ? "-15px" : "-50px",
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.6, 0.05, -0.01, 0.9],
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
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
      </ProjectLeft>
      <ProjectVideo>
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.video
            key={pVideo}
            style={{ width: !!pVideo ? "100%" : 0 }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
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
