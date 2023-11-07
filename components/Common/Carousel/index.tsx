import React, { useState } from "react";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import styles from "./styles.module.scss";

interface CarouselProps {
  slides: React.ReactNode[];
}

const CarouselComponent: React.FC<CarouselProps> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slideItems = slides.map((slide, index) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={index}
      className={styles.item}
    >
      {slide}
    </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className={styles.carousel}
    >
      {slideItems}
      <div className={styles.container_control}>
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
          className={styles.control_previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
          className={styles.control_next}
        />
        <CarouselIndicators
          items={slideItems}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
          className={styles.indicators}
        />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;