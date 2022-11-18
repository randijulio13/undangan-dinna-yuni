import React from "react";
import useCountDown from "../hooks/useCountDown";

export default function CountDown({ date }) {
  const { days, hours, minutes, seconds } = useCountDown(date);
  return (
    <div className="mb-28 flex justify-center lg:mb-10">
      <div className="lg:w-2/3">
        <h1 className="text-center font-cursive text-6xl font-medium text-white" data-aos="fade-up">
          Count The Date
        </h1>
        <div className="my-5 grid animate-pulse grid-cols-2 gap-10 font-serif text-4xl lg:grid-cols-4" data-aos="fade-up">
          <div className="flex aspect-[1/1] flex-col items-center justify-center rounded-full text-white duration-300 hover:scale-110 hover:bg-black hover:bg-opacity-5">
            <h1>{days}</h1>
            <h1>Days</h1>
          </div>
          <div className="flex aspect-[1/1] flex-col items-center justify-center rounded-full text-white duration-300 hover:scale-110 hover:bg-black hover:bg-opacity-5">
            <h1>{hours}</h1>
            <h1>Hours</h1>
          </div>
          <div className="flex aspect-[1/1] flex-col items-center justify-center rounded-full text-white duration-300 hover:scale-110 hover:bg-black hover:bg-opacity-5">
            <h1>{minutes}</h1>
            <h1>Minutes</h1>
          </div>
          <div className="flex aspect-[1/1] flex-col items-center justify-center rounded-full text-white duration-300 hover:scale-110 hover:bg-black hover:bg-opacity-5">
            <h1>{seconds}</h1>
            <h1>Seconds</h1>
          </div>
        </div>
        <h1 className="animate-pulse text-center font-serif text-8xl text-white lg:hidden" data-aos="fade-up">
          ...
        </h1>
      </div>
    </div>
  );
}
