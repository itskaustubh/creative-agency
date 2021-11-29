import styled from "styled-components"
import { motion } from "framer-motion"

export const Project = styled(motion.div)`
  display: flex;
  position: relative;
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.current.background};
`
export const ProjectLeft = styled(motion.div)`
  /* flex: 1; */
  display: flex;
  /* background: ${props => props.theme.current.background}; */
  align-items: center;
  justify-content: right;

  position: absolute;
  z-index: 99;
  left: 25rem;
  top: 40%;

  .pro-titles {
    font-size: 1.8rem;
    font-weight: 800;
    color: ${props =>
      props.theme.current.background === "#000" ? "#fff" : "#000"};
    position: absolute;
    font-size: 2rem;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;

    width: auto;
    white-space: nowrap;
    margin-right: -200px;

    ul {
      list-style: none;
      padding: 0;
      overflow: clip;
    }
  }
`

export const ProjectVideo = styled(motion.div)`
  /* flex: 2; */
  width: 70%;
  left: 30%;

  /* to help with page transition */
  position: relative;

  video {
    /* to make the width expand to left */
    float: right;

    text-decoration: none;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
export const VideoTitle = styled(motion.li)`
  position: relative;

  #space {
    display: inline-block;
  }

  svg {
    width: 50px;
    margin-right: 5px;

    path {
      fill: ${props => props.theme.current.color} !important;
    }
  }
`
