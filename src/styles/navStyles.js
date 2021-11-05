import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Nav = styled(motion.div)`
    display: flex;
    position: fixed;
    height : 100%;
    width: 100%;
    background: ${props => props.theme.red};
    top: 0;
    left: 0;
`
export const NavLeft = styled.div`
    flex: 1;
    display: flex;
    background: ${props => props.theme.red};
    align-items: center;
    justify-content: right;
    
    .nav-titles{
        font-size: 1.8rem;
        font-weight: 800;
        color: ${props => props.theme.background === '#000' ? '#fff':'#000'};
        position: absolute;
        margin-right: -50px;
        font-size: 2rem;
        transition: all 0.3s ease-in-out; 

        ul{
            list-style: none;
            
        }
    }

`

export const NavVideo = styled.div`
    flex: 1;

    video{
        text-decoration: none;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`