import React from "react";
import { FaInstagram } from "react-icons/fa";
import data from "../data";

function Detail({ couple, ...props }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8" {...props}>
      <img
        src={couple.photos}
        className="w-[70%] rounded-full border-[3px] border-white shadow-2xl duration-500 hover:scale-105 lg:w-full  lg:rounded-[100px]"
      />
      <span className="text-center font-cursive text-8xl text-white" {...props}>
        {couple.nickName}
      </span>
      <div className="h-[1px] w-1/3 rounded-full bg-gray-100" {...props}></div>
      <span className="text-center font-serif text-3xl text-white/30" {...props}>
        {couple.fullName}
      </span>
      <span className="text-medium px-4 text-center font-sans text-lg text-white" {...props}>
        {couple.type == "Groom" ? "Putra" : "Putri"} dari Bapak {couple.fatherName} dan Ibu {couple.motherName}
      </span>
      <div className="flex h-full w-full items-center justify-center" {...props}>
        <a href={couple.instagram} className="rounded-full bg-white p-3 text-2xl text-primary-900 duration-300 hover:bg-primary-400 hover:text-white">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default function CoupleInfo() {
  return (
    <div className="my-5 flex flex-col items-center justify-center lg:mx-20">
      <h1 className="mb-10 text-center font-cursive text-6xl text-white" data-aos="fade-up">
        The Bride
      </h1>
      <div className="mt-4 columns-1 gap-48 lg:columns-2">
        <Detail couple={data.couple[0]} data-aos="fade-up" />
        <h1 className="my-10 text-center font-cursive text-8xl text-white lg:hidden" data-aos="fade-up">
          &
        </h1>
        <Detail couple={data.couple[1]} data-aos="fade-up" />
      </div>
      {/* <h1 className="text-white text-8xl font-serif animate-pulse" data-aos="fade-up">
        ...
      </h1> */}
    </div>
  );
}
