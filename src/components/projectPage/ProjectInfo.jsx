import React, { useEffect } from "react"
import { InfoContainer, Info, Credits } from "../../styles/projectStyles"

import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

const ProjectInfo = () => {
  const animation = useAnimation()
  const [infoRef, isInView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  })

  useEffect(() => {
    if (isInView) {
      console.log("project info in view!")
      animation.start("visible")
    }
  }, [isInView])

  return (
    <InfoContainer
      ref={infoRef}
      animate={animation}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: -150 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        // exit: {
        //   opacity: 0,
        //   transition: { duration: 0.2 },
        // },
      }}
      // exit="exit"
    >
      <Info>
        <p>
          We see it everywhere. Where mineral rich water colours our shores. In
          a blazing sky that bodes well for the next day. Painted on vessels,
          dyed in our wool and glowing from the pride of islanders. It’s also
          the unmistakable colour of the world’s finest lobster. Known
          worldwide. And across Canada. We celebrate a colour, and inspire our
          viewers. Most importantly, we’re reminded PEI lobster as nothing short
          of legendary.
        </p>
      </Info>
      <Credits>
        <div className="credit">
          <p className="credit-type">Director</p>
          <p className="credit-name">Me</p>
        </div>
        <div className="credit">
          <p className="credit-type">Director</p>
          <p className="credit-name">Me</p>
        </div>
        <div className="credit">
          <p className="credit-type">Director</p>
          <p className="credit-name">Me</p>
        </div>
        <div className="credit">
          <p className="credit-type">Director</p>
          <p className="credit-name">Me</p>
        </div>
        <div className="credit">
          <p className="credit-type">Director</p>
          <p className="credit-name">Me</p>
        </div>
        <div className="credit">
          <p className="credit-type">Director</p>
          <p className="credit-name">Me</p>
        </div>
      </Credits>
    </InfoContainer>
  )
}

export default ProjectInfo
