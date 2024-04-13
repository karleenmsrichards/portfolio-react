import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import "../components/TechStack.css"
import html5Icon from "../images/html5Icon.png";
import css3Icon from "../images/css3Icon.png";
import javascriptIcon from "../images/javascriptIcon.png";
import pythonIcon from "../images/pythonIcon.png";
import reactIcon from "../images/reactIcon.png";
import nodeIcon from "../images/nodeIcon.png";
import postgreIcon from "../images/postgreIcon.png";
import sequelizeIcon from "../images/sequelize-icon.png";
import postmanIcon from "../images/postman-icon.png";
import googleCloudIcon from "../images/google-cloud-icon.png";
import awsIcon from "../images/aws-icon.png";
import djangoIcon from "../images/django-icon.png";

export function TechStackCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
            <div className="embla__slide">
                <img src={html5Icon} alt="HTML5" />
                <span>HTML5</span>
            </div>
            <div className="embla__slide">
                <img src={css3Icon} alt="CSS3" />
                <span>CSS3</span>
            </div>
            <div className="embla__slide">
                <img src={javascriptIcon} alt="JavaScript" />
                <span>JavaScript</span>
            </div>
            <div className="embla__slide">
                <img src={reactIcon} alt="React" />
                <span>React</span>
            </div>
            <div className="embla__slide">
                <img src={nodeIcon} alt="Node" />
                <span>Node</span>
            </div>
            <div className="embla__slide">
                <img src={pythonIcon} alt="Python" />
                <span>Python</span>
            </div>
            <div className="embla__slide">
                <img src={djangoIcon} alt="Django" />
                <span>Django</span>
            </div>
            <div className="embla__slide">
                <img src={postgreIcon} alt="SQL" />
                <span>PostgreSQL</span>
            </div>
            <div className="embla__slide">
                <img src={sequelizeIcon} alt="Sequelize" />
                <span>Sequelize</span>
            </div>
            <div className="embla__slide">
                <img src={postmanIcon} alt="Postman" />
                <span>Postman</span>
              </div>
              <div className="embla__slide">
                <img src={googleCloudIcon} alt="Google Cloud API" />
                <span>Google Cloud API</span>
              </div>
              <div className="embla__slide">
                <img src={awsIcon} alt="Amazon Web Services" />
                <span>Amazon Web Services</span>
            </div>
      </div>
    </div>
  )
}
