import React from "react";
import data from "../data";

export default function Story() {
  return (
    <div className="flex flex-col space-y-10 px-10">
      <h1 className="text-center font-cursive text-6xl text-white">Our Love Story</h1>
      {data.story.map((story, index) => {
        return (
          <div data-aos="fade-up">
            <div
              key={index}
              className={`${
                index % 2 != 0 ? "lg:ml-auto lg:mr-40 lg:items-end" : "lg:mr-auto lg:ml-40 lg:items-start"
              } relative flex flex-col items-center rounded-lg bg-primary-50 p-5 text-black/70 duration-500 hover:scale-105 hover:bg-primary-100 lg:w-1/2`}
            >
              <h1 className="font-cursive font-bold text-5xl">{story.title}</h1>
              <p className={`${index % 2 == 0 ? "lg:text-start" : "lg:text-end"} text-center`}>{story.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
