import React, { useState } from "react";
import { FaHandsWash } from "react-icons/fa";
import { MdHealthAndSafety, MdMasks, MdSocialDistance } from "react-icons/md";

export default function Protocol() {
  const [isShow, setIsShow] = useState(false);
  const showDialog = () => {
    setIsShow(true);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center px-5">
        <div className="flex w-full flex-col items-center justify-center rounded-3xl bg-primary-100/30 p-10 lg:w-2/3" data-aos="fade-up">
          <h1 className="my-2 flex items-center justify-center space-x-2 bg-primary-900 px-4 font-medium leading-10 text-primary-100">
            <MdHealthAndSafety />
            <strong>COVID-19</strong> <span>Prevention</span>
          </h1>
          <p className="my-4 text-center" data-aos="fade-up">
            To keep this event safe from the risk of spreading Covid-19. <br />
            Please consider the following suggestions before you come to the location:
          </p>
          <div className="my-4 grid grid-cols-3 justify-around gap-x-6 text-center sm:flex-col" data-aos="fade-up">
            <div className="flex flex-col items-center">
              <div className="flex aspect-square lg:w-28 w-20 items-center justify-center overflow-hidden rounded-full bg-primary-200 p-2 duration-300 hover:scale-110 hover:bg-primary-300">
                <span className=" text-6xl text-primary-800">
                  <FaHandsWash />
                </span>
              </div>
              <p className="mt-2 text-xs">Wash Hands</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex aspect-square lg:w-28 w-20 items-center justify-center overflow-hidden rounded-full bg-primary-200 p-2 duration-300 hover:scale-110 hover:bg-primary-300">
                <span className="text-6xl text-primary-800">
                  <MdSocialDistance />
                </span>
              </div>
              <p className="mt-2 text-xs">Social Distancing</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex aspect-square lg:w-28 w-20 items-center justify-center overflow-hidden rounded-full bg-primary-200 p-2 duration-300 hover:scale-110 hover:bg-primary-300">
                <span className="text-6xl text-primary-800">
                  <MdMasks />
                </span>
              </div>
              <p className="mt-2 text-xs">Wear Mask</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
