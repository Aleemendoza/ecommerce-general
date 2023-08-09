import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: require('./imagesSlide/banner10Descuento.jpg'),
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: require('./imagesSlide/banner6sininteres.png'),
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: require('./imagesSlide/bannerAdidas.png'),  
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('./imagesSlide/bannerCasio.jpg'),  
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: require('./imagesSlide/bannerFila.jpg'),  
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: require('./imagesSlide/bannerAdidas.png'),  
    altText: 'Slide 6',
    caption: 'Slide 6'
  }
];

const Slide = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    console.log('avanzo imagen')
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
      console.log('retrocedo imagen')
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div>
          <img height='360' width={100} src={item.src.default} alt={item.altText} /> {/* Uso de item.src.default */}
        </div>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Slide;
