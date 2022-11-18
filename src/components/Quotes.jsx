import React from "react";
import { FaHeart } from "react-icons/fa";
import data from "../data";

export default function Quotes() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex items-center justify-center space-x-2">
        <span className="text-center font-serif text-5xl" data-aos="fade-up">
          {data.couple[0].nickName.charAt(0)}
        </span>
        <span className="text-center font-serif text-xl" data-aos="fade-up" data-aos-delay="200">
          <FaHeart />
        </span>
        <span className="text-center font-serif text-5xl" data-aos="fade-up" data-aos-delay="100">
          {data.couple[1].nickName.charAt(0)}
        </span>
      </div>
      <p className="px-10 text-center font-normal lg:px-40" data-aos="fade-up">
        "Dan di antara tanda-tanda kekuasaan Allah ialah diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu merasa tentram di samping-Nya
        dan dijadikan-Nya rasa kasih sayang di antara kamu. Sesungguhnya yang demikian itu menjadi bukti kekuasaan Allah bagi kaum yang berfikir."
      </p>
      <p className="text-center font-semibold" data-aos="fade-up">
        (QS. Ar- Rum 21)
      </p>
    </div>
  );
}
