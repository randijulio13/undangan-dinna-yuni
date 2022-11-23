import React from "react";
import moment from "moment/moment";
import "moment/locale/id"; // without this line it didn't work
moment.locale("id");
import { FaMapMarkedAlt, FaMapMarkerAlt } from "react-icons/fa";
import data from "../data";

function Card({ children, img }) {
  return (
    <div className="relative aspect-[3/7] w-80 overflow-hidden rounded-2xl text-white shadow-lg shadow-black/20" data-aos="fade-up">
      <div className="absolute inset-0">
        <img src={img} className="h-full w-full object-cover" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/50 to-primary-900/80"></div>
      {children}
    </div>
  );
}

export default function EventInfo() {
  const contractDay = moment(data.contractDate).format("dddd");
  const contractDate = moment(data.contractDate).format("LL");
  const contractHour = moment(data.contractDate).format("HH:mm");
  const receptionDay = moment(data.receptionDate).format("dddd");
  const receptionDate = moment(data.receptionDate).format("LL");
  const receptionHour = moment(data.receptionDate).format("HH:mm");

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-[tangerine] text-5xl font-semibold" data-aos="fade-up">
        Assalamu’alaikum Warahmatullahi Wabarakatuh
      </h1>
      <p className="mt-10 px-10 text-center font-sans font-normal lg:px-40" data-aos="fade-up">
        Dengan segala kerendahan hati dan dengan ucapan syukur atas Rahmat Allah Subhanahu wa Ta’ala, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir
        di acara pernikahan kami yang Insya Allah akan dilaksanakan pada:
      </p>
      <div className="mt-10 columns-1 space-y-10 lg:mx-40 lg:columns-2 lg:space-x-10">
        <Card img={data.photos.cardContract}>
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-12">
            <img src="../ring.png" className="w-1/3 animate-pulse invert" alt="" />
            <div className="flex flex-col items-center justify-center space-y-6">
              <h1 className="font-[parisienne] text-4xl font-bold" data-aos="fade-up">
                Akad
              </h1>
              <div className="h-[1px] w-2/3 bg-white"></div>
              <div className="space-y-4 text-center">
                <h1 className="font-sans text-2xl font-semibold" data-aos="fade-up">
                  {contractDay}
                </h1>
                <h1 className="font-sans text-2xl font-semibold" data-aos="fade-up">
                  {contractDate}
                </h1>
                <h1 className="font-sans text-2xl font-semibold" data-aos="fade-up">
                  {contractHour} WIB
                </h1>
              </div>
              <div className="h-[1px] w-2/3 bg-white"></div>
              <h1 className="text-center text-xl font-semibold" data-aos="fade-up">
                {data.contractPlace}
              </h1>
              <p className="flex items-center px-4 text-center" data-aos="fade-up">
                {data.contractAddress}
              </p>
            </div>
            <a
              data-aos="fade-up"
              href={data.contractUrl}
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-white py-2 px-4 font-medium text-black duration-300 hover:scale-110 hover:bg-gray-300"
            >
              <FaMapMarkedAlt />
              View Map
            </a>
          </div>
        </Card>
        <Card img={data.photos.cardReception}>
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-12">
            <img src="../ring.png" className="w-1/3 animate-pulse invert" alt="" />
            <div className="flex flex-col items-center justify-center space-y-6">
              <h1 className="font-[parisienne] text-4xl font-bold" data-aos="fade-up">
                Resepsi
              </h1>
              <div className="h-[1px] w-2/3 bg-white"></div>
              <div className="space-y-4 text-center">
                <h1 className="font-sans text-2xl font-semibold" data-aos="fade-up">
                  {receptionDay}
                </h1>
                <h1 className="font-sans text-2xl font-semibold" data-aos="fade-up">
                  {receptionDate}
                </h1>
                <h1 className="font-sans text-2xl font-semibold" data-aos="fade-up">
                  {receptionHour} WIB
                </h1>
              </div>
              <div className="h-[1px] w-2/3 bg-white"></div>
              <h1 className="text-center text-xl font-semibold" data-aos="fade-up">
                {data.receptionPlace}
              </h1>
              <p className="flex items-center px-4 text-center" data-aos="fade-up">
                {data.receptionAddress}
              </p>
            </div>
            <a
              data-aos="fade-up"
              href={data.receptionUrl}
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-white py-2 px-4 font-medium text-black duration-300 hover:scale-110 hover:bg-gray-300"
            >
              <FaMapMarkedAlt />
              View Map
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}
