import { useState, useEffect } from "react";
import TrackPlayer from "react-native-track-player";

const useAudioMediaItem = (url: string) => {
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(true);
  };
  
  const pause = () => {
    setPlaying(false);
  };

  return { play, pause, playing };
};

export default useAudioMediaItem