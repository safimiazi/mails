/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import img1 from "../../../assets/HomeBanner/Slider-01.jpg"
import img2 from "../../../assets/HomeBanner/Slider-02.jpg"
import img3 from "../../../assets/HomeBanner/Slider-03.jpg"
import img4 from "../../../assets/HomeBanner/Slider-06.jpg"

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext()
    }, 3000);
    return () => clearInterval(intervalId)
  }, [goToNext])

  const data = [
    {
      title: "  Rice Processing Technology",
      content: "    We have various rice processing machines: Rice Whitener Machine, Rice Silky Machine, Rice Color Sorting Machine and many other useful machines to guarantee. The Rice Quality With compact nutrition.      "
    },

 
    
    {
      title: "Raipur auto Rice mills",
      content: " The basic objective of a rice milling system  is to remove the husk & the bran layers & produce an edible, white rice."
    },
    {
      title: "Rice Harvesting",
      content: "    We have four Kinds of rice Harvester from Hand-portable harvester, Walking harvester, Combine harvester, Mini-combine harvester.      "
    },
    {
      title: "Experience Milling Rice",  
      content: "    Raipur auto has years of experience milling rice for parched Rice, Boiled Rice, Pressure Rice. Our staff has a deep knowledge of quality control and numerous Rice manufacturing  experience.      "
    }
  ];

  return (
    <div className="relative">
      <div className="">
        <img
          src={images[currentIndex]}
          alt="carousel item"
          className="object-cover w-full h-64 sm:h-96 md:h-96"
        />
      </div>
      <div className="absolute top-1/2 left-5 transform -translate-y-1/2 -translate-x-4">
        <button
          onClick={goToPrevious}
          className="bg-white p-2 rounded-full shadow-md z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 right-5 transform -translate-y-1/2 translate-x-4">
        <button
          onClick={goToNext}
          className="bg-white p-2 rounded-full shadow-md z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      <div className="md:absolute mx-auto md:top-20 md:left-20 p-4 text-white max-w-[600px]  bg-violet-900 bg-opacity-50">
        <h4 className="text-xl ">{data[currentIndex].title}</h4>
        <p className="">{data[currentIndex].content}</p>
      </div>
    </div>
  );
};
