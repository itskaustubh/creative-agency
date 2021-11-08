import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Nav = styled(motion.div)`
    display: flex;
    position: fixed;
    height : 100%;
    width: 100%;
    background: ${props => props.theme.current.red};
    top: 0;
    left: 0;
`
export const NavLeft = styled.div`
    flex: 1;
    display: flex;
    background: ${props => props.theme.current.red};
    align-items: center;
    justify-content: right;
    
    .nav-titles{
        font-size: 1.8rem;
        font-weight: 800;
        color: ${props => props.theme.current.background === '#000' ? '#fff':'#000'};
        position: absolute;
        margin-right: -50px;
        font-size: 2rem;
        transition: all 0.3s ease-in-out; 
        text-transform: uppercase;

        ul{
            list-style: none;
            padding: 0;
            overflow: clip;
        }
    }

`

export const NavVideo = styled.div`
    flex: 2;

    video{
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
    svg {
            width: 50px;
            margin-right: 5px;
            
            path{
                fill: ${props => props.theme.current.color}
            }
        }
`