import React from "react";
import data from "../data";
import Title from "./Title";

export default function Gallery() {
  return (
    <>
      <Title>Our Gallery</Title>
      <div className="mx-10 mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {data.photos.all.map((src, index) => {
          return (
            <div key={index} className="flex items-center justify-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <img src={src} alt="" className="h-full rounded shadow-md duration-700 hover:scale-110" />
            </div>
          );
        })}
      </div>
    </>
  );
}
