import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  return (
  <>
    <h1 className="text-2xl text-gray-400 uppercase font-semibold py-8 px-10">Categories</h1>
    <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 px-10">
      <div className="relative">
        <img
          className="w-full h-64 md:h-96 object-cover rounded-lg"
          src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <Link to={"/products/1"}>
          <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold hover:bg-opacity-70 transition duration-300 rounded-lg">
            SALE
          </button>
        </Link>
      </div>
      <div className="relative">
        <img
          className="w-full h-64 md:h-96 object-cover rounded-lg"
          src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <Link to={"/products/1"}>
          <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold hover:bg-opacity-70 transition duration-300 rounded-lg">
            MEN
          </button>
        </Link>
      </div>
      <div className="relative">
        <img
          className="w-full h-64 md:h-96 object-cover rounded-lg"
          src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <Link to={"/products/1"}>
          <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold hover:bg-opacity-70 transition duration-300 rounded-lg">
            COAT
          </button>
        </Link>
      </div>
      <div className="relative">
        <img
          className="w-full h-64 md:h-96 object-cover rounded-lg"
          src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <Link to={"/products/1"}>
          <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold hover:bg-opacity-70 transition duration-300 rounded-lg">
            WOMEN
          </button>
        </Link>
      </div>
      <div className="relative">
        <img
          className="w-full h-64 md:h-96 object-cover rounded-lg"
          src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <Link to={"/products/1"}>
          <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold hover:bg-opacity-70 transition duration-300 rounded-lg">
            NEW SEASON
          </button>
        </Link>
      </div>
      <div className="relative">
        <img
          className="w-full h-64 md:h-96 object-cover rounded-lg"
          src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <Link to={"/products/1"}>
          <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold hover:bg-opacity-70 transition duration-300 rounded-lg">
            ACCESSORIES
          </button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Categories;
