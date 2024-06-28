"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Hero = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/laptop-3.png",
      title: "Latest Offer",
      mainTitle: "Gen-Z Laptop",
      price: "$200",
    },
    {
      id: 1,
      img: "/laptop-3.png",
      title: "Trending Power",
      mainTitle: "Gamers laptop",
      price: "$150",
    },
    {
      id: 2,
      img: "/laptop-3.png",
      title: "Craziest Offer",
      mainTitle: "FBI Laptop",
      price: "$300",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0 custom-slider-container">
        <Slider {...settings}>
          {slideData.map((item) => {
            return (
              <Slide
                key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
