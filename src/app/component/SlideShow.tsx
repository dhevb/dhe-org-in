"use client";
import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
}

interface SlideShowProps {
  slides: Slide[];
}

const SlideShow: React.FC<SlideShowProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div>
      <Carousel
        selectedItem={currentIndex}
        showStatus={false} // Hide status indicator
        showThumbs={false} 
        onChange={(index) => setCurrentIndex(index)}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <Image
              src={slide.src}
              alt={slide.alt}
              style={{ maxWidth: '100%', maxHeight: '60vh' }}
              width = "1000"
              height= "1000"
            />
          </div>
        ))}
      </Carousel>
      
    </div>
  );
};

export default SlideShow;
