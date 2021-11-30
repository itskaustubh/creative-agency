import React from "react"
import { Video } from "../../styles/homeStyles"
import { VideoContainer } from "../../styles/projectStyles"

const ProjectVideo = ({ location, video }) => {
  console.log({ location, video })
  const videoPath =
    "http://" +
    location.host +
    require("../../assets/video/" + video.fname).default
  console.log(videoPath)

  const onVideoLoad = () => {
    console.log("video loaded")
  }
  return (
    <div>
      <VideoContainer>
        <Video
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.6, 0.05, -0.01, 0.9],
          }}
          exit={{ opacity: 0 }}
        >
          <video
            onLoadedData={onVideoLoad}
            src={videoPath}
            autoPlay
            loop
            muted
          ></video>
        </Video>
      </VideoContainer>
    </div>
  )
}

export default ProjectVideo
