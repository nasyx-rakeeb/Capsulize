import { useState } from "react";

const useHome = () => {
  const [composeModalVisible, setComposeModalVisible] = useState(false);

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
