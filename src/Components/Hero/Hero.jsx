import React from "react";
import bannerImg from "../../assets/books.jpg";

const Hero = () => {
  return (
    <div className="hero  bg-base-200 min-h-screen mt-12 rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20 text-start">
        <img src={bannerImg} className=" rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-6xl font-bold mb-12 leading-[84px]">
            Books to freshen up your bookshelf!
          </h1>

          <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-5 px-7 rounded-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
