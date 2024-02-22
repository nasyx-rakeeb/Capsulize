import { Event } from "react-native-track-player";
import TrackPlayer from "react-native-track-player";

export const PlayBackService = async function () {
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());

  TrackPlayer.addEventListener(Event.PlaybackState, async (data) => {
    if (data.state === "ended" || data.state === "stopped") {
      await TrackPlayer.seekTo(0);
    }
  });
};
