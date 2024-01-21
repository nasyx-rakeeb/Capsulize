import { useState, useEffect} from "react";
import TrackPlayer, {Capability} from "react-native-track-player";

const useHome = () => {
  const [composeModalVisible, setComposeModalVisible] = useState(false);
  
  useEffect(() => {
    const initializePlayer = async () => {
      try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
      stopWithApp: true, 
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.Stop,
        Capability.SeekTo
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.Stop,
        Capability.SeekTo
      ],
      notificationCapabilities: [
        Capability.Play,
        Capability.Pause,
      ]
    });
      } catch (error) {
        console.log(error)
      }
    };
    initializePlayer();
  }, []);

  const showComposeModal = () => {
    setComposeModalVisible(true);
    return;
  };

  const closeComposeModal = () => {
    setComposeModalVisible(false);
    return;
  };

  return { composeModalVisible, showComposeModal, closeComposeModal };
};

export default useHome;
