import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
`

export const Logo = styled.div`
  a {
    font-size: 1.8rem;
    font-weight: 800;
    color: ${props => props.theme.current.color};
    letter-spacing: -1px;
  }
  span {
    height: 12px;
    width: 12px;
    background: ${props =>
      props.isHomePage ? props.theme.current.red : props.theme.anti.color};
    margin: 0 4px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: 4px;
    transition: all 0.3s ease-in-out;
  }
`

export const Menu = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;

    .hamburger:hover > span {
      transition: all 0.3s ease-in-out;
      background: ${props =>
        props.isHomePage ? props.theme.current.red : props.theme.anti.color};
    }
  }
  span {
    width: 36px;
    height: 8px;
    display: block;
    background: ${props => props.theme.current.color};
    margin: 8px;
  }
`

export const JumpToProjects = styled.div`
  transition: all 0.4s ease-in-out;

  color: ${props =>
    props.expand ? props.theme.current.red : props.theme.current.color};

  &:hover {
    color: ${props => props.theme.current.red};
  }
`
