import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";

export default function ButtonMusic({ isPlaying, handleMusic }) {
  return (
    <button
      type="button"
      className="fixed bottom-5 right-5 z-50 rounded-full border-none bg-white p-3 text-lg text-gray-800 shadow-md outline-none duration-300 hover:scale-110 hover:bg-primary-400 hover:text-white"
      onClick={handleMusic}
    >
      {isPlaying ? <FaPause /> : <FaPlay />}
    </button>
  );
}
