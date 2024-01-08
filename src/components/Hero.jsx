import { useState } from "react";
import heroData from "../data/heroData";
import arrow from "../assets/images/icon-arrow.svg";
import leftIcon from "../assets/images/icon-angle-left.svg";
import rightIcon from "../assets/images/icon-angle-right.svg";
import Navbar from "./Navbar";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDetail = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
  };

  const prevDetail = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroData.length) % heroData.length
    );
  };

  return (
    <div className="font-body relative">
      <div className="w-full flex md:flex-row flex-col">
        <div className="md:w-[60%] w-full relative">
          <img
            src={heroData[currentIndex].deskImage}
            alt="hero image desktop"
            className="md:flex hidden"
          />
          <img
            src={heroData[currentIndex].mobileImage}
            alt="hero image mobile"
            className="md:hidden flex w-full"
          />
          <div className="absolute bottom-0 md:right-[-6.25rem] right-0">
            <div className="flex md:w-[100px] w-[80px] items-center justify-center">
              <button
                onClick={prevDetail}
                className="bg-Black w-full hover:bg-VeryDarkGray p-2"
              >
                <img src={leftIcon} alt="/" />
              </button>
              <button
                onClick={nextDetail}
                className="bg-Black w-full hover:bg-VeryDarkGray p-2"
              >
                <img src={rightIcon} alt="/" />
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-[40%] w-full flex flex-col justify-center gap-4 md:px-16 p-12 text-left bg-White">
          <div className="">
            <h1 className="md:text-4xl text-3xl font-bold mb-4 text-Black">
              {heroData[currentIndex].heading}
            </h1>
            <p className="text-VeryDarkGray">{heroData[currentIndex].text}</p>
          </div>
          <div className="flex gap-5 items-center mt-4 cursor-pointer hover:text-VeryDarkGray">
            <p className="tracking-[0.7em] text-lg uppercase font-[600]">
              {heroData[currentIndex].button}
            </p>
            <img src={arrow} alt="arrow icon" className="h-[14px]" />
          </div>
        </div>
      </div>
      <div className="absolute top-4 md:left-12 left-4">
        <Navbar />
      </div>
    </div>
  );
};

export default Hero;
