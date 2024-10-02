import React, { useState, useEffect } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  // Auto slide after a set interval
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 seconds

    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[80vh] mt-5">
      <div className="mx-10 overflow-hidden">
        <div
          className="w-full flex transition-transform ease-in-out duration-700"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {data.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-[80vh] object-cover object-left-top"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Icons */}
      <div className="absolute inset-0 flex justify-between items-center px-4 mx-10">
        <div
          className="p-2 bg-white rounded-full shadow-md cursor-pointer"
          onClick={prevSlide}
        >
          <WestOutlinedIcon className="text-gray-700" />
        </div>
        <div
          className="p-2 bg-white rounded-full shadow-md cursor-pointer"
          onClick={nextSlide}
        >
          <EastOutlinedIcon className="text-gray-700" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {data.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full bg-gray-300 ${
              currentSlide === index ? "bg-gray-800" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
