import React from "react";
import { FaCircle, FaHeart } from "react-icons/fa";
import data from "../data";

export default function Quotes() {
  return (
    <div className="flex flex-col items-center space-y-8">
      {/* <div className="flex items-center justify-center space-x-2">
        <span className="text-center font-serif text-5xl" data-aos="fade-up">
          {data.couple[0].nickName.charAt(0)}
        </span>
        <span className="text-center font-serif text-xs" data-aos="fade-up" data-aos-delay="200">
          <FaCircle />
        </span>
        <span className="text-center font-serif text-5xl" data-aos="fade-up" data-aos-delay="100">
          {data.couple[1].nickName.charAt(0)}
        </span>
      </div> */}
      <p className="px-10 text-center font-normal lg:px-40" data-aos="fade-up">
        "And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between you
        compassion and mercy. Surely in this are signs for people who reflect."
      </p>
      <p className="text-center font-semibold" data-aos="fade-up">
        (QS. Ar- Rum 21)
      </p>
    </div>
  );
}
