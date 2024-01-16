import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../../others/colors";
import Dropdown from "./Dropdown";

const AudienceModal = ({
  audienceModalVisible,
  timeCapsuleData,
  setTimeCapsuleData,
  options,
  setAudienceModalVisible,
}: {
  audienceModalVisible: boolean;
  timeCapsuleData: TimeCapsule;
  setTimeCapsuleData: () => void;
  options: string[];
  setAudienceModalVisible: () => void;
}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={audienceModalVisible}
    >
      <View style={styles.container}>
        <Dropdown
          timeCapsuleData={timeCapsuleData}
          setTimeCapsuleData={setTimeCapsuleData}
          options={options}
          setAudienceModalVisible={setAudienceModalVisible}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default AudienceModal;
