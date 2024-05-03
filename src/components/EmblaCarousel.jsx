import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export const EmblaCarousel = ({ axis, children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, autoplay: true, axis: axis }, [Autoplay()]);
  const [stopCarousel, setStopCarousel] = useState(false);

  const handleStopPlay = () => {
    setStopCarousel(!stopCarousel);
  };      

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])
  
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      stopCarousel ? emblaApi.stop() : emblaApi.play();
    }
  }, [stopCarousel, emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {children}
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>Prev</button>
      <button className="embla__next" onClick={scrollNext}>Next</button>
      <button className="carousel-btn" onClick={handleStopPlay}>{stopCarousel ? 'Play' : 'Stop'}</button>
    </div>
  );
};
