import React, { createContext, useState } from "react";
import { useEffect } from "react";
import useSound from "use-sound";
import bgMusic from "../bg.mp3";

export const HandleMusicContext = createContext();
export const ToggleMusicContext = createContext();

export default function UseMusicProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { pause }] = useSound(bgMusic, {
    onend: () => {
      play();
    },
    loop: true,
    volume: 1,
  });

  const handleMusic = () => {
    if (!isPlaying) {
      play();
      setIsPlaying(true);
    } else {
      pause();
      setIsPlaying(false);
    }
  };

  return (
    <HandleMusicContext.Provider value={handleMusic}>
      <ToggleMusicContext.Provider value={isPlaying}>{children}</ToggleMusicContext.Provider>
    </HandleMusicContext.Provider>
  );
}
