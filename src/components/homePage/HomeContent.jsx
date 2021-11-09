import React, { useEffect } from "react"
import { HomeContentContainer, ContentText } from "../../styles/homeStyles"

import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

const HomeContent = () => {
  const animation = useAnimation()
  const [contentRef, isInView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  })

  useEffect(() => {
    if (isInView) {
      animation.start("visible")
    }
  }, [isInView])

  return (
    <HomeContentContainer>
      <ContentText
        ref={contentRef}
        animate={animation}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: -150 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] },
          },
        }}
      >
        Great stories don’t just happen— they need to be uncovered. And we dig
        deep to discover the great stories that lie just below the surface. Dirt
        under our fingernails and all.
      </ContentText>
    </HomeContentContainer>
  )
}

export default HomeContent
