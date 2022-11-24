import axios from "axios";
import { useEffect, useState } from "react";
import eventData from "../data";

export default function useGetGuests() {
  const [guests, setGuests] = useState();

  const getGuests = async () => {
    let url = `${import.meta.env.VITE_JSON_URL}/events/${eventData.eventId}`;
    let { data } = await axios(url);
    setGuests(data.guests);
  };

  useEffect(() => {
    getGuests().then((r) => r);
  }, []);

  return guests;
}
