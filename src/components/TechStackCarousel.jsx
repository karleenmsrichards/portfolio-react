import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import "../components/TechStack.css"
import html5Icon from "../images/html5-icon.webP";
import css3Icon from "../images/css3-icon.webP";
import javascriptIcon from "../images/javascript-icon.webP";
import pythonIcon from "../images/python-icon.webP";
import reactIcon from "../images/react-icon.webP";
import nodeIcon from "../images/node-icon.webP";
import postgreIcon from "../images/postgres-icon.webP";
import sequelizeIcon from "../images/sequelize-icon.svg";
import postmanIcon from "../images/postman-icon.svg";
import googleCloudIcon from "../images/google-cloud-icon.svg";
import awsIcon from "../images/aws-icon.svg";
import djangoIcon from "../images/django-icon.svg";

export function TechStackCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, autoplay: true }, [Autoplay()]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);
    
    const techStack = [
        { name: 'HTML5', icon: html5Icon },
        { name: 'CSS3', icon: css3Icon },
        { name: 'JavaScript', icon: javascriptIcon },
        { name: 'React', icon: reactIcon },
        { name: 'Node', icon: nodeIcon },
        { name: 'Python', icon: pythonIcon },
        { name: 'Django', icon: djangoIcon },
        { name: 'PostgreSQL', icon: postgreIcon },
        { name: 'Sequelize', icon: sequelizeIcon },
        { name: 'Postman', icon: postmanIcon },
        { name: 'Google Cloud API', icon: googleCloudIcon },
        { name: 'Amazon Web Services', icon: awsIcon },
      ];

    return (
        <div className="embla" >
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {techStack.map((item, index) => (
                        <div key={index} className="embla__slide">
                            <img src={item.icon} alt={item.name} />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="carousel-scroll-btn-container">
                <button className="embla__prev carousel-scroll-btn" onClick={scrollPrev}>
                    Prev
                </button>
                <button className="embla__next carousel-scroll-btn" onClick={scrollNext}>
                    Next
                </button>
            </div>
        </div>
  )
}
