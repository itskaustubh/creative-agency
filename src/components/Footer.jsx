import React from "react"
import {
  FooterContainer,
  FooterContent,
  FooterLinks,
} from "../styles/footerStyles"
import { YoutubeLogo, InstagramLogo } from "../assets/svg/social-icons"
import { useGlobalDispatchContext } from "../context/globalContext"

const Footer = () => {
  const dispatch = useGlobalDispatchContext()
  const setCursor = cursorType => {
    dispatch({ type: "CURSOR_TYPE", value: cursorType })
  }
  return (
    <FooterContainer>
      <FooterContent>
        <div
          className="content-one"
          onMouseEnter={() => setCursor("melt")}
          onMouseLeave={setCursor}
        >
          <p id="email">hello@kaustubh.app</p>
        </div>
        <div className="content-two">
          <p id="address">Pune, India</p>
        </div>
      </FooterContent>
      <FooterLinks>
        <YoutubeLogo
          onMouseEnter={() => setCursor("melt")}
          onMouseLeave={setCursor}
          fillColor="crimson"
          width="48px"
        />
        <InstagramLogo
          onMouseEnter={() => setCursor("melt")}
          onMouseLeave={setCursor}
          fillColor="crimson"
          width="48px"
        />
      </FooterLinks>
    </FooterContainer>
  )
}

export default Footer
