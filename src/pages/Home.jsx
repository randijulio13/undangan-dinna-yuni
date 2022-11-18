import Aos from "aos";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Content from "../components/Content";
import Cover from "../components/Cover";
import data from "../data";
import useCheckGuest from "../hooks/useCheckGuest";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useQuery from "../hooks/useQuery";
import UseMusicProvider from "../providers/UseMusicProvider";

export const MusicContext = createContext();

export default function Home() {
  const [cover, setCover] = useState(true);
  const query = useQuery();
  const to = query.get("to");
  const isOnList = useCheckGuest(to);
  const navigate = useNavigate();
  useDocumentTitle(data.name);
  function checkGuest() {
    if (!isOnList) {
      navigate("not-found");
    }
  }

  useEffect(() => {
    // checkGuest();
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [cover]);

  return (
    <>
      <UseMusicProvider>
        <Cover
          {...{
            cover,
            setCover,
            data,
            to,
          }}
        />

        <Content cover={cover} />
      </UseMusicProvider>
      <ToastContainer />
    </>
  );
}
