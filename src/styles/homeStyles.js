import styled from 'styled-components'
import {motion} from 'framer-motion'


export const Banner = styled.div`
    height: 100vh;
    width: 100%;
    /* background: lemonchiffon; */
`
export const Video = styled.div`
    height: 100vh;
    width: 100%;
    /* background: pink; */
    video{
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
    left : -18px;
    color: ${props => props.theme.text};
    pointer-events: none;
`

export const Headline = styled(motion.span)`
    display: block;
    font-size: 10rem;
    font-weight: 900;
    line-height: 0.76;
`