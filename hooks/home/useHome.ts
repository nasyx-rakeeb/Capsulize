import { useState, useEffect} from "react";
import TrackPlayer from "react-native-track-player";

const useHome = () => {
  const [composeModalVisible, setComposeModalVisible] = useState(false);
  
  useEffect(() => {
    const initializePlayer = async () => {
      await TrackPlayer.setupPlayer();
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
