import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { HandleMusicContext } from "../providers/UseMusicProvider";
import Loading from "./Loading";

export default function Cover({ cover, setCover, data, to }) {
  const handleMusic = useContext(HandleMusicContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  function handleOpenCover() {
    setCover((cover) => !cover);
    handleMusic();
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute z-[2]">
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`${cover ? "" : "-translate-y-full"} fixed inset-0 z-[1] bg-primary-800 duration-700`}>
        <div className={`absolute inset-0`}>
          <img src={data.photos.cover} className="h-full w-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="absolute top-20 flex flex-col items-center justify-center text-white drop-shadow-lg">
            <h1 className="font-kalam text-lg lg:text-2xl">The Wedding Of</h1>
            <h1 className="font-cursive text-6xl lg:text-8xl">
              {data.couple[0].nickName} & {data.couple[1].nickName}
            </h1>
          </div>
          <div className="absolute bottom-20 flex flex-col items-center justify-center gap-2 text-white">
            <h1>You're invited :</h1>
            <h1 className="text-3xl font-medium">{to}</h1>
            <p className="my-4 text-center font-serif font-light">
              Mohon Maaf apabila ada <br></br> kesalahan penulisan Nama / Gelar
            </p>
            <button
              type="button"
              onClick={handleOpenCover}
              className="mt-2 flex items-center gap-2 rounded-full bg-white py-2 px-4 text-sm text-black shadow-lg duration-300 hover:scale-110 hover:bg-gray-100 focus:outline-none"
            >
              <FaEnvelopeOpen />
              Buka Undangan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
