import React from "react";
import { FaInstagram } from "react-icons/fa";
import data from "../data";
import Title from "./Title";

function Detail({ couple, ...props }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8" {...props}>
      <img src={couple.photos} className="w-[85%] rounded-[999px] shadow-2xl duration-500 hover:scale-105 lg:w-full" />
      <span className="text-center font-cursive text-8xl text-white" {...props}>
        {couple.nickName}
      </span>
      <div className="h-[1px] w-1/3 rounded-full bg-gray-100" {...props}></div>
      <span className="text-center font-serif text-xl lg:text-3xl text-primary-200" {...props}>
        {couple.fullName}
      </span>
      <span className="text-medium text px-4 text-center lg:text-lg font-sans text-white" {...props}>
        {couple.type == "Groom" ? "Putra" : "Putri"} dari Bapak {couple.fatherName} <br /> dan Ibu {couple.motherName}
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
      <Title>The Bride</Title>
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
