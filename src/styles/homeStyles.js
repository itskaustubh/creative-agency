import styled from "styled-components"
import { motion } from "framer-motion"

export const Banner = styled.div`
  height: 100vh;
  width: 100%;
  /* background: lemonchiffon; */
`
export const Video = styled.div`
  height: 100vh;
  width: 100%;
  /* background: pink; */
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`

export const Canvas = styled.canvas`
  position: absolute;
  left: 0;
  top: 0;
  /* background: pink; */
`

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -60px;
  left: -18px;
  color: ${props => props.theme.current.color};
  pointer-events: none;
`

export const Headline = styled(motion.span)`
  display: block;
  font-size: 10rem;
  font-weight: 900;
  line-height: 0.76;
`

// HOME CONTENT STYLES

export const HomeContentContainer = styled.div`
  display: flex;
  justify-content: center;
  background: ${props => props.theme.current.background};
  color: ${props => props.theme.current.color};
  padding: 7rem;
`

export const ContentText = styled(motion.h2)`
  width: 50%;
  min-width: 270px;
`

// ABOUT STYLES

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 7rem 0 7rem 0;
`

export const AboutText = styled.div`
  flex: 6;
  justify-content: center;
  .about-text-head,
  .about-text-foot {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    p {
      width: 40rem;
    }
  }

  .about-text-head {
    font-size: 2rem;
    font-weight: bold;
  }
  .about-text-foot {
    font-size: 1.1rem;
    font-weight: bold;
  }
`

export const AboutAccordion = styled.div`
  flex: 2;

  .accordion-head {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .service {
  }
`
export const ServiceHead = styled.div`
  display: flex;
  font-size: 1.2rem;
  color: ${props =>
    props.expand ? props.theme.current.red : props.theme.current.color};

  &:hover {
    color: ${props => props.theme.current.red};
  }

  .arrow {
    position: relative;

    span {
      width: 10px;
      height: 5px;
      display: block;
      background: ${props =>
        props.expand ? props.theme.current.red : props.theme.current.color};
      margin-top: 10px;
      position: absolute;
      top: 0;
      transition: all 0.4s ease-in-out;
    }

    #span-one {
      top: 0;
      transform: ${props => (props.expand ? "rotate(45deg)" : "rotate(0deg)")};
    }

    #span-two {
      left: 4px;
      transform: ${props => (props.expand ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }

  .service-title {
    margin-left: 20px;
    transition: all 0.4s ease-in-out;
  }
`

export const ServiceList = styled.div`
  font-size: 0.9rem;
  font-style: italic;
  margin-left: 5px;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;

  // collapse expand transition
  max-height: ${props => (props.expand ? "600px" : "0px")};
  opacity: ${props => (props.expand ? "1" : "0")};
  overflow: hidden;
  transition: all 0.4s ease-in-out;
`
