import React, { useState } from "react"
import {
  AboutContainer,
  AboutText,
  AboutAccordion,
  ServiceHead,
  ServiceList,
} from "../../styles/homeStyles"
import { serviceList } from "../../content/videoList"

const About = () => {
  const [shouldExpand, setShouldExpand] = useState(-1)

  const toggleExpand = id => {
    console.log(id)
    setShouldExpand(shouldExpand === id ? -1 : id)
  }

  return (
    <AboutContainer>
      <AboutText>
        <div className="about-text-head">
          <p>
            Furrow is an integrated, full-service creative studio offering video
            production, creative development, and post-production services.
          </p>
        </div>
        <div className="about-text-foot">
          <p>
            Everybody’s got a story. And we don’t stop until we’ve uncovered
            what makes yours worth telling. Whether it’s working directly with
            you, an agency partner, or putting the finishing touches on
            something special, we’re ready to dig in and get our hands dirty—are
            you?
          </p>
        </div>
      </AboutText>
      <AboutAccordion>
        <div className="accordion-head">Services</div>
        {serviceList.map(service => (
          <div
            className="service"
            key={service.id}
            onClick={() => toggleExpand(service.id)}
          >
            <ServiceHead expand={shouldExpand === service.id}>
              <div className="arrow">
                <span id="span-one"></span>
                <span id="span-two"></span>
              </div>
              <p className="service-title">{service.title}</p>
            </ServiceHead>
            <ServiceList expand={shouldExpand === service.id}>
              <ul>
                {service.results.map(result => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </ServiceList>
          </div>
        ))}
      </AboutAccordion>
    </AboutContainer>
  )
}

export default About
