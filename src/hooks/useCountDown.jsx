import moment from "moment";
import { useEffect, useState } from "react";

export default function useCountDown(targetDate) {
  const countDownDate = moment(targetDate);
  const [countDown, setCountDown] = useState(countDownDate.diff());
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate.diff());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const date = {
    days: Math.floor(countDown / (1000 * 60 * 60 * 24)),
    hours: Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((countDown % (1000 * 60)) / 1000),
  };

  return date;
}
