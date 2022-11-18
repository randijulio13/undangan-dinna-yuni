import React, { useContext } from "react";
import data from "../data";
import { HandleMusicContext, ToggleMusicContext } from "../providers/UseMusicProvider";
import ButtonMusic from "./ButtonMusic";
import Comments from "./Comments";
import CountDown from "./CountDown";
import CoupleInfo from "./CoupleInfo";
import Curve from "./Curve";
import EventInfo from "./EventInfo";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Gift from "./Gift";
import Hero from "./Hero";
import Protocol from "./Protocol";
import Quotes from "./Quotes";
import Wave from "./Wave";
import WaveOpacity from "./WaveOpacity";

export default function Content({ cover }) {
  const isPlaying = useContext(ToggleMusicContext);
  const handleMusic = useContext(HandleMusicContext);

  return (
    <div className={cover ? "hidden" : ""}>
      <ButtonMusic {...{ isPlaying, handleMusic }} />
      <section className="relative h-screen bg-primary-900">
        <Hero />
      </section>

      <section className="relative z-10 bg-primary-900">
        <div className="absolute -bottom-[1px] w-full rotate-180">
          <Curve />
        </div>
      </section>

      <section className="relative bg-white py-20">
        <Quotes />
      </section>

      <section className="relative z-10 bg-primary-900">
        <div className="absolute -top-[1px] w-full">
          <Curve />
        </div>
      </section>

      <section className="relative bg-primary-900 py-20 lg:p-20">
        <div className={`absolute inset-0`}>
          <img src={data.photos.coverPortrait} className="h-full w-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-900/40 to-primary-900"></div>
        <CountDown date={data.contractDate} />
        <CoupleInfo />
      </section>

      {/* <section className="relative z-10 bg-primary-900 lg:h-32">
        <div className="absolute -bottom-[1px] w-full rotate-180 overflow-hidden">
          <Wave />
        </div>
      </section> */}

      <section className="relative z-10 bg-primary-900">
        <div className="absolute -bottom-[1px] w-full rotate-180">
          <Curve />
        </div>
      </section>

      <section className="relative bg-white py-20">
        <EventInfo />
      </section>

      <section className="relative z-10 bg-primary-900">
        <div className="absolute -top-[1px] w-full">
          <Curve />
        </div>
      </section>

      {/* <section className="relative z-10 bg-primary-900 lg:h-32">
        <div className="absolute -top-[1px] w-full overflow-hidden">
          <Wave />
        </div>
      </section> */}

      <section className="relative bg-gradient-to-b from-primary-900 via-primary-500 to-primary-900 py-20">
        <Gallery data={data} />
      </section>

      {/* <section className="relative z-10 bg-primary-900 lg:h-32">
        <div className="absolute -bottom-[1px] w-full rotate-180 overflow-hidden">
          <WaveOpacity />
        </div>
      </section> */}
      <section className="relative z-10 bg-primary-900">
        <div className="absolute -bottom-[1px] w-full rotate-180">
          <Curve />
        </div>
      </section>

      <section className="relative space-y-10 bg-white py-20">
        <Gift />
        <Protocol />
        <Comments />
      </section>
      <section className="relative z-10 bg-primary-900">
        <div className="absolute -top-[1px] w-full">
          <Curve />
        </div>
      </section>

      {/* <section className="relative z-10 bg-white lg:h-32">
        <div className="absolute -bottom-[1px] w-full rotate-180 overflow-hidden">
          <Wave className="fill-primary-900" />
        </div>
      </section> */}

      <section className="relative bg-primary-900">
        <Footer />
      </section>
    </div>
  );
}
