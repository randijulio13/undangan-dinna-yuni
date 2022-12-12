import moment from "moment";
import { useEffect, useState } from "react";

export default function useCountDown(targetDate) {
  const countDownDate = moment(targetDate);
  const [countDown, setCountDown] = useState(countDownDate.diff());
  useEffect(() => {
    if (countDownDate.diff() > 0) {
      const interval = setInterval(() => {
        setCountDown(countDownDate.diff());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [countDownDate]);

  if (countDownDate.diff() > 0) {
    return {
      days: Math.floor(countDown / (1000 * 60 * 60 * 24)),
      hours: Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((countDown % (1000 * 60)) / 1000),
    };
  } else {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
}
