import React from "react";
import data from "../data";
import Title from "./Title";

export default function Story() {
  return (
    <div className="flex flex-col space-y-10 px-10">
      <Title>Our Love Story</Title>
      {data.story.map((story, index) => {
        return (
          <div key={index} data-aos="fade-up">
            <div
              className={`${
                index % 2 != 0 ? "lg:ml-auto lg:mr-40 lg:items-end" : "lg:mr-auto lg:ml-40 lg:items-start"
              } relative flex flex-col items-center rounded-lg bg-primary-50 p-5 text-black/70 duration-500 hover:scale-105 hover:bg-primary-100 lg:w-1/2`}
            >
              <h1 className="font-cursive text-5xl font-bold">{story.title}</h1>
              <p className={`${index % 2 == 0 ? "lg:text-start" : "lg:text-end"} text-sm md:text-base text-center`}>{story.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
