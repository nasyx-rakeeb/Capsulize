import { useState, useEffect } from "react";
import TrackPlayer from "react-native-track-player";

const useAudioMediaItem = (url: string) => {
  const [playing, setPlaying] = useState(false);

  const play = async () => {
    await TrackPlayer.setupPlayer()
    setPlaying(true);
  };
  
  const pause = () => {
    setPlaying(false);
  };

  return { play, pause, playing };
};

export default useAudioMediaItem