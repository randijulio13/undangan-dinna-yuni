import React from "react";
import data from "../data";

export default function Gallery() {
  return (
    <>
      <h1 className="text-center font-[tangerine] text-5xl font-semibold text-white" data-aos="fade-up">
        Our Gallery
      </h1>
      <div className="mx-10 mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {data.photos.allXs.map((src, index) => {
          return (
            <div key={index} className="flex items-center justify-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <img src={src} alt="" className="h-full rounded-3xl shadow-md duration-700 hover:scale-110" />
            </div>
          );
        })}
      </div>
    </>
  );
}
