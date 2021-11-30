import React, { useRef, useState, useEffect } from "react"
import { useGlobalDispatchContext } from "../../context/globalContext"
import { videoList } from "../../content/videoList"
import { motion, useAnimation } from "framer-motion"

import { useInView } from "react-intersection-observer"

import { MoreProjects, MoreProjectsContainer } from "../../styles/projectStyles"
import { StyledLink } from "../../styles/globalStyles"

const ProjectFooter = ({ location, video }) => {
  const videoRef = useRef(null)
  const footLeftVideoRef = useRef(null)
  const footRightVideoRef = useRef(null)

  const dispatch = useGlobalDispatchContext()

  const [videoPath, setVideoPath] = useState(null)

  const filteredVideoList = videoList.filter(v => v.id !== video.id)
  const prevVideoIndex = video.id - 1 < 0 ? videoList.length - 1 : video.id - 1
  const nextVideoIndex = video.id + 1 >= videoList.length ? 0 : video.id + 1
  // console.log(filteredVideoList)

  const setCursor = isHomePage => {
    dispatch({
      type: "IS_HOME_PAGE",
      value: isHomePage,
    })
  }

  const ArrowSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
      <path
        d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
        fill="#FFF"
        fillRule="evenodd"
      ></path>
    </svg>
  )

  let mouseOnHoverCords = {
    x: 0,
    y: 0,
  }
  const handleMouseMoveOnFoot = e => {
    const setLeft = parseInt(-(mouseOnHoverCords.x - e.pageX))
    const setTop = parseInt(-(mouseOnHoverCords.y - e.pageY))

    // console.log(e)
    setHoverFootVideoCords({
      ...hoverFootVideoCords,
      left: setLeft,
      top: setTop,
    })
  }

  const handleVideoHover = (e, vid, side) => {
    mouseOnHoverCords = { x: e.pageX, y: e.pageY }
    const elementToListen =
      side === "left" ? footLeftVideoRef.current : footRightVideoRef.current

    // elementToListen.removeEventListener("mousemove", handleMouseMoveOnFoot)
    elementToListen.addEventListener("mousemove", handleMouseMoveOnFoot)

    console.log("videoHover")
    setFootVideoHover(true)
    setVideoPath(
      "http://" +
        location.host +
        require("../../assets/video/" + vid.fname).default
    )
  }

  const handleFootVideoUnHover = (e, side) => {
    setFootVideoHover(false)
    const elementToUnlisten =
      side === "left" ? footLeftVideoRef.current : footRightVideoRef.current

    elementToUnlisten.removeEventListener("mousemove", handleMouseMoveOnFoot)
  }

  const animation = useAnimation()
  const [moreRef, isInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  })

  useEffect(() => {
    if (isInView) {
      animation.start("visible")
    }
  }, [isInView])

  // const transitionVideo = () => {
  //   if (videoRef.current === null) return
  //   const xref = videoRef.current
  //   const bounds = xref.getBoundingClientRect()

  //   return { left: -bounds.left, top: -bounds.top, opacity: 0 }
  // }

  const onOtherProjectClicked = () => {
    setVideoPath(null)
  }

  const [isFootVideoHover, setFootVideoHover] = useState(false)
  const [hoverFootVideoCords, setHoverFootVideoCords] = useState({
    left: 0,
    top: 0,
  })

  const varFootVideoHover = {
    hovered: {
      left: hoverFootVideoCords.left,
      top: hoverFootVideoCords.top,
      transition: { duration: 0.001 },
    },

    notHovered: {
      opacity: 0,
      transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] },
    },
  }

  return (
    <div>
      <MoreProjectsContainer
        ref={moreRef}
        animate={animation}
        initial="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] },
          },
          leave: {
            opacity: 0,
            transition: { duration: 0.2 },
          },
        }}
        exit="leave"
        onMouseEnter={() => setCursor(false)}
        onMouseLeave={() => setCursor(true)}
      >
        <MoreProjects>
          <StyledLink to={`/project/${videoList[prevVideoIndex].path}`}>
            <div
              ref={footLeftVideoRef}
              className="left-project more-project"
              onMouseOver={e =>
                handleVideoHover(e, videoList[prevVideoIndex], "left")
              }
              onMouseLeave={e => handleFootVideoUnHover(e, "left")}
            >
              <h1>{videoList[prevVideoIndex].title}</h1>
              <div className="svg-inside">
                <ArrowSVG />
              </div>
            </div>
          </StyledLink>
          <motion.div
            className="video-trailer"
            // exit={() => transitionVideo()}
            animate={isFootVideoHover ? "hovered" : "notHovered"}
            variants={varFootVideoHover}
            transition={{
              duration: 1.2,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}
          >
            {videoPath !== null ? (
              <motion.video
                ref={videoRef}
                src={videoPath}
                key={videoPath}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.6, 0.05, -0.01, 0.9],
                }}
                autoPlay
                loop
                muted
              ></motion.video>
            ) : null}
          </motion.div>

          <StyledLink to={`../../project/${videoList[nextVideoIndex].path}`}>
            <div
              ref={footRightVideoRef}
              onMouseUp={onOtherProjectClicked}
              className="right-project more-project"
              onMouseOver={e =>
                handleVideoHover(e, videoList[nextVideoIndex], "right")
              }
              onMouseLeave={e => handleFootVideoUnHover(e, "right")}
            >
              <h1>{videoList[nextVideoIndex].title}</h1>
              <div className="svg-inside">
                <ArrowSVG />
              </div>
            </div>
          </StyledLink>
        </MoreProjects>
      </MoreProjectsContainer>
    </div>
  )
}

export default ProjectFooter
