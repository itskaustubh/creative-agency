import styled from 'styled-components'
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
    height : 0px;
    width : 100%;
    position : absolute;
    top : 72px;
    right : 0;
    left : 0;
    z-index : 99;
`

export const Logo = styled.div`
    a{
        font-size : 1.8rem;
        font-weight : 800;
        color : ${props => props.theme.color};
        letter-spacing : -1px;
    }
    span{
        height : 12px;
        width : 12px;
        background : ${props => props.theme.red};
        margin : 0 4px;
        border-radius : 100%;
        display : inline-block;
        position : relative;
        bottom : 4px;
    }
`

export const Menu = styled.div`
    button{
        transform-origin : center;
        border : none; 
        padding : 20px;
        background : none;
        outline : none;

        .menu-div{ 
            span{
                transition: all 0.3s ease-in-out; 
            }
        }
        .menu-div.melt{
            span{
                background: ${props => props.theme.red};
            }
        }
    }
    span{
        width : 36px;
        height : 8px;
        display : block;
        background : ${props => props.theme.color};
        margin : 8px;
    }
`
