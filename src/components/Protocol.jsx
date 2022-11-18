import React, { useState } from "react";
import { MdHealthAndSafety } from "react-icons/md";
import ProtocolDialog from "./ProtocolDialog";

export default function Protocol() {
  const [isShow, setIsShow] = useState(false);
  const showDialog = () => {
    setIsShow(true);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center px-5">
        <div className="flex w-full flex-col items-center justify-center rounded-3xl bg-primary-100/30 p-10 lg:w-2/3" data-aos="fade-up">
          <h1 className="text-center font-cursive text-6xl" data-aos="fade-up">
            Covid 19 Prevention
          </h1>
          <p className="my-4 text-center" data-aos="fade-up">
            Untuk menjaga acara pernikahan ini aman dari resiko penularan Covid-19, mohon simak anjuran berikut sebelum anda hadir ke lokasi :
          </p>
          <div className="flex space-x-2" data-aos="fade-up">
            <button
              className="flex items-center justify-center space-x-2 rounded-full bg-primary-100 py-2 px-4 outline-none duration-300 hover:bg-primary-200 focus:outline-none focus:ring focus:ring-primary-900/80"
              onClick={showDialog}
            >
              <MdHealthAndSafety />
              Anjuran Terkait Covid19
            </button>
          </div>
        </div>
      </div>
      <ProtocolDialog {...{ isShow, setIsShow }} />
    </>
  );
}
