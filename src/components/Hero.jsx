import React from "react";
import moment from "moment/moment";
import { HiChevronDoubleDown } from "react-icons/hi";
import data from "../data";
moment.locale("en");

export default function Hero() {
  const day = moment(data.contractDate).format("dddd, LL");
  return (
    <div className="h-screen items-center justify-center">
      <div className="absolute inset-0">
      <img src={data.photos.cover} className="hidden lg:block h-full w-full object-cover" alt="" />
          <img src={data.photos.coverMobile} className="block lg:hidden h-full w-full object-cover" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/50"></div>
      <div className="absolute top-0 flex w-full flex-col items-center justify-center py-20">
        <h1 className="font-kalam text-xl font-medium text-white drop-shadow-lg">The Wedding Of</h1>
        <h1 className="my-3 font-cursive text-6xl font-medium text-white drop-shadow-lg duration-300 hover:scale-110">
          {data.couple[0].nickName} & {data.couple[1].nickName}
        </h1>
        <h1 className="font-sans text-xl text-white drop-shadow-lg">{day}</h1>
      </div>
      <div className="absolute bottom-60 flex w-full flex-col items-center justify-center py-20">
        <h1 className="animate-bounce text-4xl text-white">
          <HiChevronDoubleDown />
        </h1>
      </div>
    </div>
  );
}
