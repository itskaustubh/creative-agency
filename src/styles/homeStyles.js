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
