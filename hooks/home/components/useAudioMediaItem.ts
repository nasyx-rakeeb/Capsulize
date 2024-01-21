import { useState, useEffect } from "react";
import TrackPlayer, { useTrackPlayerEvents, Event, State, useProgress } from 'react-native-track-player';

const events = [ Event.PlaybackState, Event.PlaybackError ];

const useAudioMediaItem = (url: string) => {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { position, buffered, duration } = useProgress()

  useEffect(() => {
    return () => {
      TrackPlayer.stop();
      TrackPlayer.reset();
    };
  }, []);
  
  useTrackPlayerEvents(events, (event) => {
    if (event.type === Event.PlaybackState) {
      switch (event?.state) {
        case "none":
          setError(false)
          setLoading(false)
          setPlaying(false)
          break
        case "ready":
          setError(false)
          setLoading(false)
          setPlaying(false)
          break
        case "playing":
          setError(false)
          setLoading(false)
          setPlaying(true)
          break
        case "paused":
          setError(false)
          setLoading(false)
          setPlaying(false)
          break
        case "stopped":
          setError(false)
          setLoading(false)
          setPlaying(false)
          break
        case "ended": 
          setError(false)
          setLoading(false)
          setPlaying(false)
          TrackPlayer.stop()
          break
        case "buffering":
          setError(false)
          setLoading(true)
          setPlaying(false)
          break
        case "loading":
          setError(false)
          setLoading(true)
          setPlaying(false)
          break
        case "error":
          setError(true)
          setLoading(false)
          setPlaying(false)
          break
        case undefined:
          setError(false)
          setLoading(false)
          setPlaying(false)
          break
        default:
          setError(false)
          setLoading(false)
          setPlaying(false)
      }
    }
    if (event.type === Event.PlaybackError) {
      setError(true)
      setLoading(false)
      setPlaying(false)
    }
  });

  const play = async () => {
    try {
      await TrackPlayer.add({
      id: '1',
      url: url,
      title: 'Track Title',
      artist: 'Artist',
      artwork: 'https://picsum.photos/200',
    });
    await TrackPlayer.play();
    setPlaying(true);
    setError(false)
    setLoading(false)
    } catch (error) {
      console.log(error)
      setPlaying(false)
      setError(true)
      setLoading(false)
    }
  };

  const pause = async () => {
    await TrackPlayer.pause();
    setPlaying(false);
    setError(false)
    setLoading(false)
  };

  return { play, pause, playing, loading, error, position, duration };
};

export default useAudioMediaItem;
