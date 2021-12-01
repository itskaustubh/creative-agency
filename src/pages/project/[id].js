// https://stackoverflow.com/a/55757176 (see comments)
import React, { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/seo"
import ProjectVideo from "../../components/projectPage/ProjectVideo"
import ProjectInfo from "../../components/projectPage/ProjectInfo"
import ProjectFooter from "../../components/projectPage/ProjectFooter"
import { videoList } from "../../content/videoList"

const IdPage = props => {
  console.log(props)
  let [video, setVideo] = useState(null)
  let [location, setLocation] = useState(null)

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  useEffect(() => {
    setVideo(videoList.filter(v => v.path === props.params.id)[0])
    setLocation(props.location)
    // pageTitle = capitalizeFirstLetter(video.title)
    return () => {}
  }, [props])

  return (
    <Layout>
      <Seo title="Projects" />
      {location && video && (
        <>
          <ProjectVideo location={location} video={video} />
          <ProjectInfo />
          <ProjectFooter location={location} video={video} />
        </>
      )}
    </Layout>
  )
}

export default IdPage
