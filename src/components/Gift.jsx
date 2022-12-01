import React, { useState } from "react";
import { MdSendToMobile } from "react-icons/md";
import GiftDialog from "./GiftDialog";
import Title from "./Title";

export default function Gift() {
  const [isShow, setIsShow] = useState(false);
  const showDialog = () => {
    setIsShow(true);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center px-5">
        <div className="flex w-full flex-col items-center justify-center rounded-3xl bg-primary-100/30 px-5 py-10 lg:w-2/3" data-aos="fade-up">
          <Title className={`text-black`}>Wedding Gift</Title>
          <p className="my-4 text-center" data-aos="fade-up">
            For Family and Friends who want to send gifts. Please send them via:
          </p>
          <div className="flex space-x-2" data-aos="fade-up">
            <button
              className="flex items-center justify-center space-x-2 rounded-full bg-primary-100 py-2 px-4 outline-none duration-300 hover:bg-primary-200 focus:outline-none focus:ring focus:ring-primary-900/80"
              onClick={showDialog}
            >
              <MdSendToMobile />
              Transfer
            </button>
          </div>
        </div>
      </div>
      <GiftDialog {...{ isShow, setIsShow }} />
    </>
  );
}
