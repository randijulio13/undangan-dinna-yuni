import moment from "moment/moment";
import "moment/locale/id";
import React, { useState } from "react";
import useQuery from "../hooks/useQuery";
import Curve from "../components/Curve";
import Cover from "../components/Cover";
import Hero from "../components/Hero";
import Quotes from "../components/Quotes";
import CountDown from "../components/CountDown";
import CoupleInfo from "../components/CoupleInfo";

export default function FirstTemplate({ data }) {
  const [cover, setCover] = useState(true);
  const query = useQuery();
  const to = query.get("to");

  return (
    <Cover cover={cover} setCover={setCover} data={data} to={to}>
      <section className="relative z-0 bg-primary-900 py-20">
        <Hero data={data} />
        <div className="absolute -bottom-1 w-full rotate-180 overflow-hidden leading-[0px]">
          <Curve />
        </div>
      </section>

      <section className="relative bg-white p-10 lg:p-20">
        <Quotes data={data} />
      </section>

      <section className="relative flex flex-col items-center justify-center bg-primary-900 p-10 py-32 lg:p-20">
        <div className="absolute -top-1 w-full overflow-hidden leading-[0px]">
          <Curve />
        </div>
        <CountDown data={data} />
      </section>

      <section className="relative flex flex-col items-center justify-center bg-primary-900 py-20">
        <CoupleInfo data={data} />
      </section>
    </Cover>
  );
}
