import styled from "styled-components"

export const FooterContainer = styled.div`
  display: flex;
  margin-bottom: 4rem;
  align-items: center;
`
export const FooterContent = styled.div`
  flex: 6;
  display: flex;
  justify-content: space-around;
  font-size: 1.4rem;
  transition: all 0.6s ease-in-out;

  .content-one {
    #email {
      transition: color 0.4s ease-in-out;
      &:hover {
        color: ${props => props.theme.current.red};
      }
    }
  }
`
export const FooterLinks = styled.div`
  flex: 2;

  svg {
    margin: 0 8px 0 8px;
    &:hover > g > path {
      fill: ${props => props.theme.current.red};
    }
  }

  path {
    transition: all 0.4s ease-in-out;
    fill: ${props => props.theme.current.color};
  }
`
