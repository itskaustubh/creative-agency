// https://stackoverflow.com/a/55757176 (see comments)
import React, { useEffect } from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/seo"
import { Video } from "../../styles/homeStyles"

const IdPage = props => {
  const videoPath =
    "http://" +
    props.location.host +
    require("../../assets/video/" + props.location.state.fname).default
  console.log(videoPath)

  const onVideoLoad = () => {
    console.log("video loaded")
  }

  console.log(props)
  return (
    <Layout>
      <Seo title="Project" />
      <Video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        <video
          onLoadedData={onVideoLoad}
          src={videoPath}
          autoPlay
          loop
          muted
        ></video>
      </Video>

      {/* <h1>{props.id}</h1> */}
    </Layout>
  )
}

export default IdPage
