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
      position: relative;
      list-style: none;
      padding: 0;
      overflow: clip;

      span {
        position: relative;
      }
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

  #video-title {
    font-weight: 800;
    &:hover {
      color: ${props => props.theme.current.red};
    }
  }
`

// PROJECT PAGE STYLES

export const VideoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.current.background};
`

export const InfoContainer = styled(motion.div)`
  width: auto;
  padding: 5rem 0 10rem 5rem;
`

export const Info = styled.div`
  max-width: 30rem;
`
// https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
export const Credits = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  row-gap: 2rem;

  margin-top: 5rem;

  .credit {
    .credit-type {
      padding-bottom: 0px;
      border-bottom-style: solid;
      border-bottom-width: 2.1px;
      width: fit-content;
    }

    .credit-name {
      padding-top: 5px;
      font-size: 14px;
    }
  }
`

export const MoreProjectsContainer = styled(motion.div)`
  width: auto;
  height: 18rem;
  background: ${props => props.theme.current.red};
`

export const MoreProjects = styled.div`
  padding: 3rem 3rem 2rem 3rem;
  background: inherit;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;

  .more-project {
    .svg-inside {
      pointer-events: none;
      svg {
        pointer-events: none;
        width: 100px;
        position: relative;
        transition: all 0.2s ease-in-out;
      }
    }
  }

  .left-project {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &:hover > .svg-inside > svg {
      transform: translate(40px, 0);
      transition: all 0.2s ease-in-out;
    }

    .svg-inside {
      transform: rotate(180deg);
    }
  }

  .video-trailer {
    position: relative;
    video {
      width: 25rem;
    }
  }

  .right-project {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &:hover > .svg-inside > svg {
      transform: translate(40px, 0);
      transition: all 0.2s ease-in-out;
    }

    .svg-inside {
      svg {
        &:hover {
          transform: translate(40px, 0);
        }
      }
    }
  }
`
